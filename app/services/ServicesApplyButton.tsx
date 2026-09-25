'use client'

import type { ReactNode } from 'react'

const APPLY_FORM = 'services-apply'

export default function ServicesApplyButton({ children, className }: { children: ReactNode; className: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))}
      className={className}
    >
      {children}
    </button>
  )
}
