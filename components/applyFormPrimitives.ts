/** Shared Apply modal + /calendar form field and button styles. */

export const applyFormInputClass =
  'w-full min-h-[48px] rounded-lg border border-[var(--color-ink-200)] bg-white px-3 py-2.5 font-serif text-base leading-normal text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)]/80 shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors focus:border-[var(--color-off-black)] focus:outline-none focus:ring-1 focus:ring-[var(--color-off-black)]/15'

export const applyFormLabelClass =
  'mb-2 block font-serif text-[11px] font-normal uppercase tracking-[0.16em] text-[var(--color-ink-300)]'

export const applyFormBtnPrimaryClass =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_1px_0_rgba(15,15,15,0.06)] transition-colors bg-[var(--color-off-black)] hover:bg-[var(--color-off-black)]/88 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] disabled:pointer-events-none disabled:opacity-45 sm:w-auto sm:min-w-[10.5rem]'

export const applyFormBtnGhostClass =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[var(--color-ink-200)] bg-white px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors hover:border-[var(--color-off-black)]/22 hover:bg-[var(--color-off-black)]/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] disabled:pointer-events-none disabled:opacity-45 sm:w-auto'

export const applyFormCardClass =
  'max-h-[min(90vh,40rem)] w-full max-w-[26rem] overflow-y-auto rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12),0_1px_0_rgba(15,15,15,0.04)]'

/** Same surface as the modal card, full width of parent (e.g. /calendar right column). */
export const applyFormPanelClass =
  'w-full rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12),0_1px_0_rgba(15,15,15,0.04)]'
