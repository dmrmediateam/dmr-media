import React, { useEffect, useMemo } from 'react'
import { set } from 'sanity'
import { PatchEvent } from 'sanity'

// Custom input component that calculates totalLeads automatically
export const totalLeadsInput = {
  components: {
    input: (props: any) => {
      const { value, onChange, document } = props
      const paidLeads = Number(document?.paidLeads) || 0
      const organicLeads = Number(document?.organicLeads) || 0
      const calculatedTotal = paidLeads + organicLeads

      useEffect(() => {
        // Auto-update when paidLeads or organicLeads changes
        if (value !== calculatedTotal) {
          onChange(PatchEvent.from(set(calculatedTotal)))
        }
      }, [paidLeads, organicLeads, value, onChange, calculatedTotal])

      return props.renderDefault(props)
    },
  },
}

// Custom input component that calculates estCloses automatically
export const estClosesInput = {
  components: {
    input: (props: any) => {
      const { value, onChange, document } = props
      const totalLeads = Number(document?.totalLeads) || 0
      const avgCloseRate = Number(document?.avgCloseRate) || 0

      // Est. Closes = (Avg Close Rate / 100) × Total Leads
      const calculatedEstCloses = useMemo(() => {
        return avgCloseRate > 0 && totalLeads > 0
          ? Math.round(((avgCloseRate / 100) * totalLeads) * 100) / 100
          : 0
      }, [totalLeads, avgCloseRate])

      useEffect(() => {
        // Auto-update when totalLeads or avgCloseRate changes
        if (Math.abs((value || 0) - calculatedEstCloses) > 0.01) {
          onChange(PatchEvent.from(set(calculatedEstCloses)))
        }
      }, [totalLeads, avgCloseRate, value, onChange, calculatedEstCloses])

      return props.renderDefault(props)
    },
  },
}

// Custom input component that calculates estROI automatically
export const estROIInput = {
  components: {
    input: (props: any) => {
      const { value, onChange, document } = props
      const estCloses = Number(document?.estCloses) || 0
      const commission = Number(document?.commission) || 0
      const packagePrice = Number(document?.packagePrice) || 0
      const adSpend = Number(document?.adSpend) || 0

      // Est. ROI = ((Est. Closes × Commission) / (Package Price + Ad Spend)) × 100
      const calculatedEstROI = useMemo(() => {
        const totalCost = packagePrice + adSpend
        return totalCost > 0 && commission > 0 && estCloses > 0
          ? Math.round(((estCloses * commission) / totalCost) * 100 * 100) / 100
          : 0
      }, [estCloses, commission, packagePrice, adSpend])

      useEffect(() => {
        // Auto-update when any of the dependent fields change
        if (Math.abs((value || 0) - calculatedEstROI) > 0.01) {
          onChange(PatchEvent.from(set(calculatedEstROI)))
        }
      }, [estCloses, commission, packagePrice, adSpend, value, onChange, calculatedEstROI])

      return props.renderDefault(props)
    },
  },
}
