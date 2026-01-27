'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Dummy data for Legendary Real Estate Services
const DUMMY_DATA = {
  client: {
    name: 'Legendary Real Estate Services',
    logo: '/images/legendary-logo.png',
    since: '2024',
    location: 'California',
    monthlyInvestment: 8500,
    partnership: 'Active since January 2024'
  },
  metrics: {
    monthlyLeads: 247,
    leadGrowth: 34,
    websiteTraffic: 12854,
    trafficGrowth: 28,
    conversionRate: 4.2,
    conversionGrowth: 15,
    adSpend: 8500,
    roi: 425,
    revenueGenerated: 36125,
    costPerLead: 34.41,
    qualifiedLeads: 189,
    closedDeals: 12,
    avgDealValue: 485000
  },
  campaigns: [
    {
      id: 1,
      name: 'Luxury Home Buyers - Q1',
      status: 'Active',
      leads: 89,
      clicks: 2341,
      impressions: 45231,
      ctr: 5.2,
      budget: 3500,
      spent: 2890
    },
    {
      id: 2,
      name: 'First Time Buyers',
      status: 'Active',
      leads: 124,
      clicks: 3821,
      impressions: 67892,
      ctr: 5.6,
      budget: 3000,
      spent: 2750
    },
    {
      id: 3,
      name: 'Investment Properties',
      status: 'Active',
      leads: 34,
      clicks: 1234,
      impressions: 28341,
      ctr: 4.4,
      budget: 2000,
      spent: 1860
    }
  ],
  recentLeads: [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '(555) 123-4567', interest: 'Luxury Condo', date: '2026-01-27', status: 'New' },
    { id: 2, name: 'Michael Chen', email: 'mchen@email.com', phone: '(555) 234-5678', interest: 'Family Home', date: '2026-01-27', status: 'Contacted' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.r@email.com', phone: '(555) 345-6789', interest: 'Investment', date: '2026-01-26', status: 'Qualified' },
    { id: 4, name: 'David Park', email: 'david.park@email.com', phone: '(555) 456-7890', interest: 'First Home', date: '2026-01-26', status: 'New' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@email.com', phone: '(555) 567-8901', interest: 'Luxury Home', date: '2026-01-25', status: 'Contacted' }
  ],
  analytics: {
    topPages: [
      { page: '/listings/luxury-estates', views: 3421, avgTime: '4:32' },
      { page: '/neighborhoods/downtown', views: 2891, avgTime: '3:45' },
      { page: '/about', views: 2341, avgTime: '2:18' },
      { page: '/contact', views: 1987, avgTime: '1:42' }
    ]
  }
};

export default function LegendaryDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('dmr_auth');
    
    if (auth) {
      try {
        const authData = JSON.parse(auth);
        const isValid = authData.user === 'DMR' && authData.client === 'legendary';
        
        if (isValid) {
          setIsAuthenticated(true);
        } else {
          router.push('/admin');
        }
      } catch {
        router.push('/admin');
      }
    } else {
      router.push('/admin');
    }
    
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('dmr_auth');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <header className="bg-[#fafaf9] border-b border-[#e7e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif text-[#0f0f0f] tracking-tight">{DUMMY_DATA.client.name}</h1>
              <p className="text-[#525252] text-sm font-light mt-1">{DUMMY_DATA.client.partnership}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-[#0f0f0f] hover:opacity-80 text-[#fafaf9] font-light text-sm uppercase tracking-wider transition-opacity duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ROI Hero Section */}
        <div className="mb-12 bg-gradient-to-br from-[#3c88c0] to-[#2a6a96] rounded-sm p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-[#fafaf9]/70 uppercase tracking-[0.2em] text-xs font-light">Your Return on Investment</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-7xl md:text-8xl font-serif text-[#fafaf9] tracking-tight">{DUMMY_DATA.metrics.roi}%</span>
                  <span className="text-3xl text-[#fafaf9]/80 font-light">ROI</span>
                </div>
                <p className="text-[#fafaf9]/90 text-lg font-light max-w-2xl leading-relaxed">
                  For every dollar invested, you're generating <span className="font-normal text-[#fafaf9]">${(DUMMY_DATA.metrics.roi / 100).toFixed(2)}</span> in return.
                  Your marketing partnership is delivering exceptional results.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/20">
                  <p className="text-[#fafaf9]/70 text-xs uppercase tracking-wider mb-1">Monthly Investment</p>
                  <p className="text-3xl font-serif text-[#fafaf9]">${DUMMY_DATA.metrics.adSpend.toLocaleString()}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/20">
                  <p className="text-[#fafaf9]/70 text-xs uppercase tracking-wider mb-1">Revenue Generated</p>
                  <p className="text-3xl font-serif text-[#fafaf9]">${DUMMY_DATA.metrics.revenueGenerated.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[#fafaf9]/60 font-light">Performance Overview</span>
            <div className="flex-1 h-px bg-[#fafaf9]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Monthly Leads */}
            <div className="bg-[#fafaf9] rounded-sm p-8 border border-[#e7e7e5] group hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-2 font-light">Monthly Leads</p>
                  <p className="text-5xl font-serif text-[#0f0f0f]">{DUMMY_DATA.metrics.monthlyLeads}</p>
                </div>
                <div className="bg-green-50 px-3 py-1 rounded-sm">
                  <span className="text-green-600 text-sm font-light">+{DUMMY_DATA.metrics.leadGrowth}%</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e7e7e5]">
                <p className="text-[#525252] text-sm font-light">{DUMMY_DATA.metrics.qualifiedLeads} qualified leads</p>
              </div>
            </div>

            {/* Cost Per Lead */}
            <div className="bg-[#fafaf9] rounded-sm p-8 border border-[#e7e7e5] group hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-2 font-light">Cost Per Lead</p>
                  <p className="text-5xl font-serif text-[#0f0f0f]">${DUMMY_DATA.metrics.costPerLead}</p>
                </div>
                <div className="bg-blue-50 px-3 py-1 rounded-sm">
                  <span className="text-blue-600 text-sm font-light">Excellent</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e7e7e5]">
                <p className="text-[#525252] text-sm font-light">Industry avg: $67</p>
              </div>
            </div>

            {/* Conversion Rate */}
            <div className="bg-[#fafaf9] rounded-sm p-8 border border-[#e7e7e5] group hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-2 font-light">Conversion Rate</p>
                  <p className="text-5xl font-serif text-[#0f0f0f]">{DUMMY_DATA.metrics.conversionRate}%</p>
                </div>
                <div className="bg-green-50 px-3 py-1 rounded-sm">
                  <span className="text-green-600 text-sm font-light">+{DUMMY_DATA.metrics.conversionGrowth}%</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e7e7e5]">
                <p className="text-[#525252] text-sm font-light">Above industry standard</p>
              </div>
            </div>

            {/* Closed Deals */}
            <div className="bg-[#fafaf9] rounded-sm p-8 border border-[#e7e7e5] group hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-2 font-light">Deals Closed</p>
                  <p className="text-5xl font-serif text-[#0f0f0f]">{DUMMY_DATA.metrics.closedDeals}</p>
                </div>
                <div className="bg-purple-50 px-3 py-1 rounded-sm">
                  <span className="text-purple-600 text-sm font-light">This Month</span>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e7e7e5]">
                <p className="text-[#525252] text-sm font-light">Avg: ${(DUMMY_DATA.metrics.avgDealValue / 1000).toFixed(0)}K value</p>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic & Engagement */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[#fafaf9]/60 font-light">Traffic & Engagement</span>
            <div className="flex-1 h-px bg-[#fafaf9]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#fafaf9] rounded-sm p-8 border border-[#e7e7e5]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-2 font-light">Website Traffic</p>
                  <div className="flex items-baseline gap-3">
                    <p className="text-6xl font-serif text-[#0f0f0f]">{DUMMY_DATA.metrics.websiteTraffic.toLocaleString()}</p>
                    <span className="text-green-600 text-lg font-light">+{DUMMY_DATA.metrics.trafficGrowth}%</span>
                  </div>
                </div>
              </div>
              
              {/* Top Pages */}
              <div className="space-y-3">
                <p className="text-[#525252] text-xs uppercase tracking-[0.2em] mb-4 font-light">Top Performing Pages</p>
                {DUMMY_DATA.analytics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#fafaf9] border border-[#e7e7e5] hover:border-[#3c88c0] transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-serif text-[#525252]">{index + 1}</span>
                      <div>
                        <p className="text-[#0f0f0f] font-light text-sm">{page.page}</p>
                        <p className="text-[#525252] text-xs">Avg. Time: {page.avgTime}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#0f0f0f] font-serif text-xl">{page.views.toLocaleString()}</p>
                      <p className="text-[#525252] text-xs">views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-sm p-6 border border-green-100">
                <p className="text-green-900 text-xs uppercase tracking-[0.2em] mb-3 font-light">Lead Quality</p>
                <p className="text-4xl font-serif text-green-900 mb-2">
                  {((DUMMY_DATA.metrics.qualifiedLeads / DUMMY_DATA.metrics.monthlyLeads) * 100).toFixed(0)}%
                </p>
                <p className="text-green-700 text-sm font-light">Qualified & Sales-Ready</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-sm p-6 border border-blue-100">
                <p className="text-blue-900 text-xs uppercase tracking-[0.2em] mb-3 font-light">Deal Value</p>
                <p className="text-4xl font-serif text-blue-900 mb-2">${(DUMMY_DATA.metrics.avgDealValue / 1000).toFixed(0)}K</p>
                <p className="text-blue-700 text-sm font-light">Average Transaction</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-sm p-6 border border-purple-100">
                <p className="text-purple-900 text-xs uppercase tracking-[0.2em] mb-3 font-light">Growth Trend</p>
                <p className="text-4xl font-serif text-purple-900 mb-2">+{DUMMY_DATA.metrics.leadGrowth}%</p>
                <p className="text-purple-700 text-sm font-light">Month-over-Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[#fafaf9]/60 font-light">Active Campaigns</span>
            <div className="flex-1 h-px bg-[#fafaf9]/10"></div>
          </div>
          
          <div className="bg-[#fafaf9] rounded-sm border border-[#e7e7e5] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f0f0f]">
                  <tr>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Campaign</th>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Status</th>
                    <th className="text-right py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Leads</th>
                    <th className="text-right py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Clicks</th>
                    <th className="text-right py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">CTR</th>
                    <th className="text-right py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Budget</th>
                    <th className="text-right py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Spent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e7e5]">
                  {DUMMY_DATA.campaigns.map((campaign) => (
                    <tr key={campaign.id} className="hover:bg-[#fafaf9] transition-colors">
                      <td className="py-4 px-6 text-[#0f0f0f] font-serif text-sm">{campaign.name}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs uppercase tracking-wider font-light">
                          {campaign.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[#0f0f0f] text-right font-serif">{campaign.leads}</td>
                      <td className="py-4 px-6 text-[#0f0f0f] text-right font-light">{campaign.clicks.toLocaleString()}</td>
                      <td className="py-4 px-6 text-[#0f0f0f] text-right font-light">{campaign.ctr}%</td>
                      <td className="py-4 px-6 text-[#0f0f0f] text-right font-light">${campaign.budget.toLocaleString()}</td>
                      <td className="py-4 px-6 text-[#0f0f0f] text-right font-serif">${campaign.spent.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[#fafaf9]/60 font-light">Recent Leads</span>
            <div className="flex-1 h-px bg-[#fafaf9]/10"></div>
          </div>
          
          <div className="bg-[#fafaf9] rounded-sm border border-[#e7e7e5] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f0f0f]">
                  <tr>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Name</th>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Contact</th>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Interest</th>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Date</th>
                    <th className="text-left py-4 px-6 text-[#fafaf9] font-light text-xs uppercase tracking-[0.2em]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e7e5]">
                  {DUMMY_DATA.recentLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#fafaf9] transition-colors">
                      <td className="py-4 px-6 text-[#0f0f0f] font-serif">{lead.name}</td>
                      <td className="py-4 px-6 text-[#525252] text-sm font-light">
                        <div>{lead.email}</div>
                        <div className="text-xs">{lead.phone}</div>
                      </td>
                      <td className="py-4 px-6 text-[#0f0f0f] font-light">{lead.interest}</td>
                      <td className="py-4 px-6 text-[#525252] font-light text-sm">{lead.date}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 text-xs uppercase tracking-wider font-light ${
                          lead.status === 'New' ? 'bg-blue-50 text-blue-700' :
                          lead.status === 'Contacted' ? 'bg-yellow-50 text-yellow-700' :
                          'bg-green-50 text-green-700'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Success Summary */}
        <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-sm p-12 border border-[#fafaf9]/10">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.2em] text-xs text-[#fafaf9]/60 mb-6 block font-light">Partnership Impact</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#fafaf9] mb-6 leading-tight">
              Driving measurable growth through strategic marketing excellence.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#fafaf9]/10">
              <div>
                <p className="text-4xl font-serif text-[#fafaf9] mb-1">{DUMMY_DATA.metrics.monthlyLeads}</p>
                <p className="text-[#fafaf9]/60 text-xs uppercase tracking-wider font-light">Monthly Leads</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#fafaf9] mb-1">{DUMMY_DATA.metrics.roi}%</p>
                <p className="text-[#fafaf9]/60 text-xs uppercase tracking-wider font-light">Return on Investment</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#fafaf9] mb-1">{DUMMY_DATA.metrics.closedDeals}</p>
                <p className="text-[#fafaf9]/60 text-xs uppercase tracking-wider font-light">Deals This Month</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#fafaf9] mb-1">+{DUMMY_DATA.metrics.leadGrowth}%</p>
                <p className="text-[#fafaf9]/60 text-xs uppercase tracking-wider font-light">Monthly Growth</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
