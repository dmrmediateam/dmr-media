import 'server-only'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export interface ClientMetrics {
  _id: string
  date: string
  paidLeads: number
  organicLeads: number
  totalLeads: number
  backlinks: number
  drDa?: string
  websiteTraffic: number
  semrushTraffic: number
  adSpend: number
  avgHomePrice: number
  gbpRankTracking?: string
  // Hidden fields for calculations (not displayed, only used for calculations)
  commission: number
  packagePrice: number
  avgCloseRate: number
}

export interface ClientServices {
  googleAds: boolean
  seoAio: boolean
  isa: boolean
  salesConsulting: boolean
}

export interface Backlink {
  _id: string
  url: string
  domain: string
  anchorText?: string
  type: string
  dateAcquired?: string
  dr?: number
  da?: number
  status: string
  notes?: string
}

/**
 * Calculate metrics for a client (on-the-fly, no write operations)
 * Est. Closes = Avg Close Rate × Total Leads
 * Est. ROI = (Est. Closes × Commission) / (Package Price + Ad Spend)
 */
export async function calculateMetrics(clientId: string) {
  // Get latest metrics with hidden fields
  const metrics = await sanityClient.fetch(
    `*[_type == "clientMetrics" && client->clientId == $clientId] | order(date desc) [0] {
      _id,
      date,
      paidLeads,
      organicLeads,
      totalLeads,
      backlinks,
      drDa,
      websiteTraffic,
      semrushTraffic,
      adSpend,
      avgHomePrice,
      gbpRankTracking,
      commission,
      packagePrice,
      avgCloseRate
    }`,
    { clientId }
  )

  if (!metrics) {
    return null
  }

  // Calculate total leads
  const totalLeads = (metrics.paidLeads || 0) + (metrics.organicLeads || 0)

  // Calculate Est. Closes
  const estCloses = metrics.avgCloseRate && totalLeads
    ? (metrics.avgCloseRate / 100) * totalLeads
    : 0

  // Calculate Est. ROI
  const totalCost = (metrics.packagePrice || 0) + (metrics.adSpend || 0)
  const estROI = totalCost > 0 && metrics.commission
    ? ((estCloses * metrics.commission) / totalCost) * 100
    : 0

  // Return calculated values (no write operation)
  return {
    ...metrics,
    estCloses: Math.round(estCloses * 100) / 100,
    estROI: Math.round(estROI * 100) / 100,
    totalLeads: totalLeads,
  }
}

/**
 * Get all metrics for a client (returns raw data including hidden fields for manual calculation)
 * Components will calculate Est. Closes and Est. ROI manually
 */
export async function getClientMetrics(clientId: string): Promise<any[]> {
  // Fetch all metrics with hidden fields for calculations
  const allMetrics = await sanityClient.fetch(
    `*[_type == "clientMetrics" && client->clientId == $clientId] | order(date desc) {
      _id,
      date,
      paidLeads,
      organicLeads,
      totalLeads,
      backlinks,
      drDa,
      websiteTraffic,
      semrushTraffic,
      adSpend,
      avgHomePrice,
      gbpRankTracking,
      estCloses,
      estROI,
      commission,
      packagePrice,
      avgCloseRate
    }`,
    { clientId }
  )

  if (!allMetrics || allMetrics.length === 0) {
    return []
  }

  // Return data with manually entered calculated fields from Sanity
  return allMetrics.map((metric: any) => ({
    _id: metric._id,
    date: metric.date,
    paidLeads: Number(metric.paidLeads) || 0,
    organicLeads: Number(metric.organicLeads) || 0,
    totalLeads: Number(metric.totalLeads) || (Number(metric.paidLeads) || 0) + (Number(metric.organicLeads) || 0),
    backlinks: Number(metric.backlinks) || 0,
    drDa: metric.drDa,
    websiteTraffic: Number(metric.websiteTraffic) || 0,
    semrushTraffic: Number(metric.semrushTraffic) || 0,
    adSpend: Number(metric.adSpend) || 0,
    avgHomePrice: Number(metric.avgHomePrice) || 0,
    gbpRankTracking: metric.gbpRankTracking,
    // Manually entered calculated fields from Sanity
    estCloses: Number(metric.estCloses) || 0,
    estROI: Number(metric.estROI) || 0,
    // Include hidden fields (for reference, not used for calculation)
    commission: Number(metric.commission) || 0,
    packagePrice: Number(metric.packagePrice) || 0,
    avgCloseRate: Number(metric.avgCloseRate) || 0,
  }))
}

/**
 * Get client services
 */
export async function getClientServices(clientId: string): Promise<ClientServices | null> {
  const services = await sanityClient.fetch(
    `*[_type == "clientServices" && client->clientId == $clientId] | order(_createdAt desc) [0] {
      googleAds,
      seoAio,
      isa,
      salesConsulting
    }`,
    { clientId }
  )

  return services || null
}

/**
 * Get client backlinks
 */
export async function getClientBacklinks(clientId: string): Promise<Backlink[]> {
  const backlinks = await sanityClient.fetch(
    `*[_type == "backlink" && client->clientId == $clientId && status == "active"] | order(dateAcquired desc) {
      _id,
      url,
      domain,
      anchorText,
      type,
      dateAcquired,
      dr,
      da,
      status,
      notes
    }`,
    { clientId }
  )

  return backlinks || []
}
