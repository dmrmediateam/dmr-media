'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard/') && 
                      !pathname.startsWith('/dashboard/sign-in') &&
                      !pathname.startsWith('/dashboard/forgot-password') &&
                      !pathname.startsWith('/dashboard/reset-password')

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isDashboard && <Footer />}
    </>
  )
}
