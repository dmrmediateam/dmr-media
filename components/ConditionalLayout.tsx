'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplyModal from '@/components/ApplyModal'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ApplyModal />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}
