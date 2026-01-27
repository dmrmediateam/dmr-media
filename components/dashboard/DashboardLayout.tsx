'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
  clientName: string
  clientId: string
  studioUrl: string
}

// Icon components
const OverviewIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const AdsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
)

const SEOIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const SalesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const QuestionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const WebsiteIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
)

const TrendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const navigation = [
  { name: 'Overview', anchor: '#overview', icon: OverviewIcon },
  { name: 'Trend Analysis', anchor: '#trend-analysis', icon: TrendIcon },
  { name: 'Google Ads Reporting', anchor: '#google-ads', icon: AdsIcon },
  { name: 'SEO/AIO Reporting', anchor: '#seo-aio', icon: SEOIcon },
  { name: 'Sales Reporting', anchor: '#sales', icon: SalesIcon },
  { name: 'Client Loom Reports', anchor: '#loom-reports', icon: VideoIcon },
  { name: 'Ask a Question', anchor: '#ask-question', icon: QuestionIcon },
]

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function DashboardLayout({ children, clientName, clientId, studioUrl }: DashboardLayoutProps) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/dashboard/sign-in')
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu when navigating
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[var(--surface-base)] flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white border-b border-[var(--color-ink-200)] sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div>
            <h2 className="font-serif text-lg text-[var(--color-off-black)]">
              {clientName}
            </h2>
            <p className="text-xs text-[var(--color-ink-400)] font-serif">
              Powered by: DMR Media
            </p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-[var(--color-ink-200)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--color-ink-200)] bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.anchor}
                    onClick={(e) => handleAnchorClick(e, item.anchor)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-serif text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] hover:text-[var(--color-off-black)]"
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </a>
                )
              })}
              <a
                href={studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-serif text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] hover:text-[var(--color-off-black)]"
              >
                <WebsiteIcon />
                <span>Website Sign In</span>
              </a>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] rounded-lg transition-colors text-sm font-serif"
              >
                <LogoutIcon />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex ${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-[var(--color-ink-200)] transition-all duration-300 flex-col sticky top-0 h-screen overflow-y-auto`}>
        <div className="p-6 border-b border-[var(--color-ink-200)]">
          <div className="flex items-center justify-between mb-2">
            <h2 className={`font-serif text-[var(--color-off-black)] transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
              {clientName}
            </h2>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded hover:bg-[var(--color-ink-200)] transition-colors flex-shrink-0"
              aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </button>
          </div>
          {sidebarOpen && (
            <p className="text-xs text-[var(--color-ink-400)] font-serif">
              Powered by: DMR Media
            </p>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.anchor}
                onClick={(e) => handleAnchorClick(e, item.anchor)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-serif text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] hover:text-[var(--color-off-black)] ${
                  !sidebarOpen ? 'justify-center' : ''
                }`}
                title={!sidebarOpen ? item.name : undefined}
              >
                <Icon />
                {sidebarOpen && <span>{item.name}</span>}
              </a>
            )
          })}
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-serif text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] hover:text-[var(--color-off-black)] ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
            title={!sidebarOpen ? 'Website Sign In' : undefined}
          >
            <WebsiteIcon />
            {sidebarOpen && <span>Website Sign In</span>}
          </a>
        </nav>

        <div className="p-4 border-t border-[var(--color-ink-200)]">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 text-[var(--color-ink-300)] hover:bg-[var(--color-ink-200)] rounded-lg transition-colors text-sm font-serif ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
            title={!sidebarOpen ? 'Logout' : undefined}
          >
            <LogoutIcon />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto w-full">
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
