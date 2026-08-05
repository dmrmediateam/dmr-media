/**
 * LAYER 2 — server-side spam heuristics. This is the real protection.
 *
 * Call `isSpam(body)` at the TOP of every form handler, before any validation.
 * A non-empty result means the submission is likely spam: respond with the
 * handler's normal success-shaped payload and silently drop it (no email, no
 * Zapier, no analytics) so bots get no signal to retune against.
 *
 * ── Tuned for DMR Media (real estate marketing / SEO agency) ──────────────
 * Deliberate omissions, because real customers of THIS business write them:
 *   - "seo", "backlinks", "guest post" — literally what clients ask for.
 *   - "loan", "mortgage", "crypto", "cash buyer" — real estate deal vocabulary.
 *     ("payday loan" IS blocked; the bare word is not.)
 *   - "whatsapp" / "telegram" — international luxury buyers genuinely use them.
 *   - Bare URLs in the message body — agents are constantly asked about their
 *     own site and will paste it. Links in the NAME field are still blocked,
 *     and 3+ links in one message is still blocked.
 *   - Sequential digit runs — street addresses, MLS/listing numbers, sale
 *     prices, and unit numbers are full of them.
 *
 * A false positive silently destroys a real lead and nobody ever finds out,
 * so when a rule's safety was uncertain it was left out.
 */

import 'server-only';

/**
 * Decoy field names. Both are unused as real fields anywhere on this site.
 *
 * NOTE: `website` is intentionally NOT here. It is a REAL, sometimes required
 * field on /api/application, /api/google-direct and /api/qualification-form
 * (as `websiteUrl`). The one endpoint where it is genuinely a decoy —
 * /api/landing-registration — passes it explicitly via `honeypotFields`.
 */
export const DEFAULT_HONEYPOT_FIELDS = ['company', 'fax'] as const;

/** Free-text fields across every form on the site. Never includes phone/email/address. */
const DEFAULT_TEXT_FIELDS = [
  'message',
  'notes',
  'comments',
  'biggestChallenge',
  'currentMarketing',
  'activeMarket',
  'market',
  'additionalInfo',
] as const;

// Phone cap is deliberately generous: leads write "(920) 249-5210 or 920-555-1234".
const MAX_FIELD_LENGTHS = { name: 120, email: 120, phone: 64, text: 5_000 };

/** 3+ links is normal for an agent pasting listings; 5 is a link dump. */
const LINK_DUMP_THRESHOLD = 5;

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  '10minutemail.com', 'guerrillamail.com', 'guerrillamail.net', 'mailinator.com',
  'tempmail.com', 'temp-mail.org', 'yopmail.com', 'sharklasers.com',
  'trashmail.com', 'throwawaymail.com', 'dispostable.com', 'maildrop.cc',
]);

/**
 * Vocabulary blocklist. Every entry here must be something no realtor, broker,
 * developer, or investor would plausibly write to a marketing agency.
 * Re-read the header note before adding to this list.
 */
const BLOCKED_TEXT_PATTERNS = [
  /\b(?:viagra|cialis|pharmacy|pills online)\b/i,
  /\b(?:porn|escort|nude|sex ?cam|adult ?dating)\b/i,
  /\b(?:casino|poker online|payday loans?|forex signals?)\b/i,
  /\b(?:xxx|hot singles|meet singles)\b/i,
  /\[url=|\[link=|<a\s+href/i,   // BBCode / raw HTML anchor injection
];

const URL_PATTERN = /https?:\/\/|www\.[a-z0-9-]+\.[a-z]{2,}/gi;

const asString = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const getEmailDomain = (email: string) => email.toLowerCase().split('@').pop() || '';
const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const normalizeDigits = (v: string) => v.replace(/\D/g, '');
// 9+ identical letters in a row. Deliberately not 6: real people write
// "sooooooo excited" and "yesssssss", and eating that lead is worse than
// letting one keyboard-mash bot through.
const hasExcessiveRepeatedChars = (v: string) => /([a-z])\1{8,}/i.test(v);
const hasKeyboardMash = (v: string) => /(?:qwerty|asdf|zxcv|jkl;|lkjh|mnbv|poiuy)/i.test(v);
const countLinks = (v: string) => v.match(URL_PATTERN)?.length ?? 0;

/**
 * Detects randomly-generated tokens (bot names/messages): long, no whitespace,
 * mixed case, very few vowels, many case-transitions — i.e. "xKfNbWqjTpLmZr".
 * The 16-char floor and the whitespace check keep real names safe.
 */
function looksLikeRandomToken(value: string) {
  const t = value.trim();
  if (t.length < 16 || /\s/.test(t)) return false;
  const letters = t.replace(/[^a-z]/gi, '');
  if (letters.length < 16) return false;
  const hasLower = /[a-z]/.test(t);
  const hasUpper = /[A-Z]/.test(t);
  const vowelRatio = (letters.match(/[aeiou]/gi)?.length ?? 0) / letters.length;
  const transitions = letters.split('').reduce((n, c, i, arr) =>
    i && c === c.toUpperCase() && arr[i - 1] === arr[i - 1].toLowerCase() ? n + 1 : n, 0);
  return hasLower && hasUpper && vowelRatio < 0.32 && transitions >= 3;
}

const hasBlockedVocabulary = (v: string) => BLOCKED_TEXT_PATTERNS.some((p) => p.test(v));

export type SpamCheckOptions = {
  /** Decoy field names for this endpoint. Defaults to DEFAULT_HONEYPOT_FIELDS. */
  honeypotFields?: readonly string[];
  /** Extra free-text field names to scan, on top of the shared defaults. */
  textFields?: readonly string[];
};

/**
 * Returns an array of reasons a submission looks like spam; an empty array
 * means the submission is clean.
 */
export function isSpam(
  body: Record<string, unknown> | null | undefined,
  options: SpamCheckOptions = {},
): string[] {
  const reasons: string[] = [];
  if (!body || typeof body !== 'object') return ['unparseable-body'];

  const honeypotFields = options.honeypotFields ?? DEFAULT_HONEYPOT_FIELDS;
  const textFields = [...DEFAULT_TEXT_FIELDS, ...(options.textFields ?? [])];

  const name =
    asString(body.name) ||
    asString(body.fullName) ||
    [asString(body.firstName), asString(body.lastName)].filter(Boolean).join(' ');
  const email = asString(body.email);
  const phone = asString(body.phone);
  const textValues = textFields.map((f) => asString(body[f])).filter(Boolean);

  // Layer 1 payoff — a filled decoy field is the single strongest signal.
  for (const field of honeypotFields) {
    if (asString(body[field])) {
      reasons.push(`honeypot:${field}`);
      break;
    }
  }

  if (name.length > MAX_FIELD_LENGTHS.name) reasons.push('name-too-long');
  if (email.length > MAX_FIELD_LENGTHS.email) reasons.push('email-too-long');
  if (phone.length > MAX_FIELD_LENGTHS.phone) reasons.push('phone-too-long');
  if (textValues.some((t) => t.length > MAX_FIELD_LENGTHS.text)) reasons.push('text-too-long');

  // Email and phone get dedicated format checks — they are never run through
  // the free-text heuristics below.
  if (email && (!isValidEmail(email) || DISPOSABLE_EMAIL_DOMAINS.has(getEmailDomain(email)))) {
    reasons.push('bad-email');
  }

  if (phone) {
    const digits = normalizeDigits(phone);
    // Only obvious junk: too short to dial, or a single repeated digit.
    // NO upper bound — leads legitimately enter two numbers, extensions, or
    // country codes in one field, and blocking that silently kills the lead.
    if (digits.length < 7 || /^(\d)\1+$/.test(digits)) {
      reasons.push('bad-phone');
    }
  }

  if (name) {
    // A real person's name never contains a link.
    if (countLinks(name) > 0) reasons.push('link-in-name');
    if (hasBlockedVocabulary(name) || hasExcessiveRepeatedChars(name) || hasKeyboardMash(name)) {
      reasons.push('spam-name');
    }
    if (looksLikeRandomToken(name)) reasons.push('random-token-name');
  }

  for (const text of textValues) {
    if (hasBlockedVocabulary(text) || hasExcessiveRepeatedChars(text) || hasKeyboardMash(text)) {
      reasons.push('spam-text');
      break;
    }
    // A few links is normal here (an agent pasting listing URLs).
    if (countLinks(text) >= LINK_DUMP_THRESHOLD) {
      reasons.push('link-dump');
      break;
    }
    if (looksLikeRandomToken(text)) {
      reasons.push('random-token-text');
      break;
    }
  }

  return reasons;
}
