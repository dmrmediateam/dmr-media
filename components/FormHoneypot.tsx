'use client'

/**
 * LAYER 1 — honeypot decoy fields.
 *
 * Field names are `hp_x7k2` and `hp_q9m4`: meaningless to browser autofill.
 * They used to be `company` and `fax`, and Chrome autofill filled `company`
 * anyway (it ignores autoComplete="off" for fields it recognizes), so real
 * leads who used autofill were silently dropped as spam. Never give a decoy a
 * name, id, or label autofill could match (company, fax, address, website...).
 *
 * Rules baked into the markup below — do not "simplify" them away:
 *   - Off-screen positioning, never `type="hidden"` (bots skip hidden inputs)
 *     and never `display:none` (some bots skip those subtrees too).
 *   - `tabIndex={-1}` so keyboard users never land in it.
 *   - `autoComplete="off"` plus the password-manager ignore attributes, so
 *     autofill has no reason to touch it.
 *   - `idSuffix` is REQUIRED: duplicate DOM ids across two forms on one page
 *     break the label association and can trigger autofill on the decoy.
 */
export const HONEYPOT_FIELD_NAMES = ['hp_x7k2', 'hp_q9m4'] as const

export default function FormHoneypot({ idSuffix }: { idSuffix: string }) {
  return (
    <div className="absolute -left-[9999px] h-1 w-1 overflow-hidden" aria-hidden="true">
      {HONEYPOT_FIELD_NAMES.map((field) => (
        <span key={field}>
          <label htmlFor={`${field}-${idSuffix}`}>Leave this blank</label>
          <input
            id={`${field}-${idSuffix}`}
            name={field}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            data-1p-ignore
            data-lpignore="true"
            data-bwignore
            data-form-type="other"
            defaultValue=""
          />
        </span>
      ))}
    </div>
  )
}

export type HoneypotValues = Record<(typeof HONEYPOT_FIELD_NAMES)[number], string>

/**
 * Reads the decoy values off a form element.
 *
 * CRITICAL: call this synchronously at the top of the submit handler, before
 * the first `await` or state change. React synthetic events are pooled, so
 * `e.currentTarget` becomes null afterwards and the values would silently
 * arrive empty — leaving the honeypot as dead code that always passes.
 */
export function readHoneypot(form: HTMLFormElement | null | undefined): HoneypotValues {
  const read = (name: string) =>
    (form?.elements.namedItem(name) as HTMLInputElement | null)?.value || ''
  return { hp_x7k2: read('hp_x7k2'), hp_q9m4: read('hp_q9m4') }
}
