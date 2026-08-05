'use client'

/**
 * LAYER 1 — honeypot decoy fields.
 *
 * Field names are `company` and `fax`, both unused as real fields anywhere on
 * this site. `website` is NOT used as a decoy here because it is a real,
 * sometimes required field on the application and google-direct forms.
 *
 * Rules baked into the markup below — do not "simplify" them away:
 *   - Off-screen positioning, never `type="hidden"` (bots skip hidden inputs)
 *     and never `display:none` (some bots skip those subtrees too).
 *   - `tabIndex={-1}` so keyboard users never land in it.
 *   - `autoComplete="off"` so browser autofill can't create a false positive
 *     that silently eats a real lead.
 *   - `idSuffix` is REQUIRED: duplicate DOM ids across two forms on one page
 *     break the label association and can trigger autofill on the decoy.
 */
export default function FormHoneypot({ idSuffix }: { idSuffix: string }) {
  return (
    <div className="absolute -left-[9999px] h-1 w-1 overflow-hidden" aria-hidden="true">
      <label htmlFor={`company-${idSuffix}`}>Company</label>
      <input
        id={`company-${idSuffix}`}
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <label htmlFor={`fax-${idSuffix}`}>Fax</label>
      <input
        id={`fax-${idSuffix}`}
        name="fax"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  )
}

export type HoneypotValues = { company: string; fax: string }

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
  return { company: read('company'), fax: read('fax') }
}
