import CalendarPromoModal from '@/components/CalendarPromoModal'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CalendarPromoModal />
    </>
  )
}
