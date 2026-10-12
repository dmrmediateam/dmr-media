'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplyModal from '@/components/ApplyModal'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  // Paid landing pages carry no site navigation: every link on them is a conversion.
  const isLanding = usePathname()?.startsWith('/landing') ?? false

  return (
    <>
      {isLanding ? null : <Navbar />}
      <ApplyModal />
      <div className="min-h-screen">
        {children}
      </div>
      {isLanding ? null : <Footer />}
    </>
  )
}
