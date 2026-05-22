'use client'

import { applyFormLabelClass } from '@/components/applyFormPrimitives'

type Props = {
  name: string
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  error?: string
  legendClassName?: string
}

export default function GoogleGeneralBulletSelect({
  name,
  label,
  value,
  options,
  onChange,
  error,
  legendClassName,
}: Props) {
  const legendClass = legendClassName ?? applyFormLabelClass

  return (
    <fieldset className="m-0 min-w-0 border-0 p-0">
      <legend className={`${legendClass} float-left clear-both mb-3 w-full`}>{label}</legend>
      <ul className="clear-both mt-0 list-none space-y-2 p-0" role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const selected = value === option
          return (
            <li key={option} className="list-none">
              <button
                type="button"
                role="radio"
                aria-checked={selected}
                name={name}
                onClick={() => onChange(option)}
                className={`gg-bullet-select__option flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                  selected
                    ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)]/[0.03]'
                    : 'border-[var(--color-ink-200)] bg-white hover:border-[var(--color-off-black)]/22'
                }`}
              >
                <span
                  className={`gg-bullet-select__bullet shrink-0 rounded-full border transition-colors ${
                    selected
                      ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)]'
                      : 'border-[var(--color-ink-200)] bg-transparent'
                  }`}
                  aria-hidden
                />
                <span className="font-serif text-base leading-snug text-[var(--color-off-black)]">{option}</span>
              </button>
            </li>
          )
        })}
      </ul>
      {error ? (
        <p role="alert" className="mt-3 font-serif text-sm text-red-900">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}
