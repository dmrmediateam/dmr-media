import CalendarPromoModal from '@/components/CalendarPromoModal'

export default function MlsIntegrationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CalendarPromoModal />
    </>
  )
}
