/**
 * What every form handler does with a submission the spam filter blocks.
 *
 * Blocked submissions used to be dropped silently, so a real lead caught by a
 * false positive (e.g. Chrome autofilling a honeypot) vanished without a trace.
 * Now each one is logged with its reasons and emailed to the team, flagged as
 * filtered, so a human can rescue it. The bot still gets the normal success
 * response from the handler, so nothing changes from its side.
 *
 * Filtered submissions never go to Zapier/Close or fire conversion pixels.
 */

import 'server-only';
import { sendFilteredSubmissionEmail } from '@/lib/email';

/** Logs the block and emails the full submission to the team. Never throws. */
export async function reportFilteredSubmission(
  source: string,
  reasons: string[],
  body: unknown,
): Promise<void> {
  const fields = toStringFields(body);
  console.warn(`[${source}] blocked likely spam`, {
    reasons,
    formName: fields.formName || fields.source || undefined,
    submissionPage: fields.submissionPage || fields.landing_page || undefined,
  });

  try {
    await sendFilteredSubmissionEmail({ source, reasons, fields });
  } catch (error) {
    console.error(`[${source}] failed to email filtered submission`, error);
  }
}

function toStringFields(body: unknown): Record<string, string> {
  if (!body || typeof body !== 'object') return {};
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    if (value === undefined || value === null || value === '') continue;
    const text = typeof value === 'string' ? value : JSON.stringify(value);
    out[key] = text.length > 5_000 ? `${text.slice(0, 5_000)}…` : text;
  }
  return out;
}
