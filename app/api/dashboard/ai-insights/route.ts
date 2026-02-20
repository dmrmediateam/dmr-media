import 'server-only'
import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/lib/auth'
import { getClientMetrics } from '@/lib/clientMetrics'
import { createClient } from '@sanity/client'
import OpenAI from 'openai'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function GET(request: Request) {
  try {
    // Check for OpenAI API key at runtime
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI insights service is not configured. Please contact support.' },
        { status: 503 }
      )
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const client = await getAuthenticatedClient()

    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch metrics data (last 6 months for trend analysis)
    const allMetrics = await getClientMetrics(client.clientId)
    
    if (!allMetrics || allMetrics.length === 0) {
      return NextResponse.json({
        insights: 'Not enough data available for trend analysis. Please add more metrics data.',
      })
    }

    // Fetch latest Loom video transcript if available
    let loomTranscript = ''
    try {
      const video = await sanityClient.fetch(
        `*[_type == "loomVideo" && client->clientId == $clientId && isActive == true] | order(date desc) [0] {
          transcript,
          title,
          date
        }`,
        { clientId: client.clientId }
      )
      
      if (video && video.transcript && video.transcript.trim()) {
        loomTranscript = `\n\nRecent Loom Report Context:\nTitle: ${video.title}\nDate: ${video.date}\nTranscript: ${video.transcript}`
      }
    } catch (error) {
      console.warn('Could not fetch Loom transcript:', error)
      // Continue without transcript
    }

    // Prepare metrics data for analysis (last 6 months)
    const recentMetrics = allMetrics.slice(0, 6).reverse() // Oldest to newest
    
    // Get current date and determine if it's winter
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() // 0-11, where 0 is January
    const isWinter = currentMonth >= 10 || currentMonth <= 2 // Nov, Dec, Jan, Feb, Mar

    // Format metrics for AI analysis
    const metricsSummary = recentMetrics.map((metric, index) => {
      const date = new Date(metric.date)
      const monthName = date.toLocaleString('default', { month: 'long', year: 'numeric' })
      
      return {
        month: monthName,
        date: metric.date,
        paidLeads: metric.paidLeads,
        organicLeads: metric.organicLeads,
        totalLeads: metric.totalLeads,
        websiteTraffic: metric.websiteTraffic,
        backlinks: metric.backlinks,
        adSpend: metric.adSpend,
        estCloses: metric.estCloses,
        estROI: metric.estROI,
      }
    })

    // Create prompt for OpenAI
    const prompt = `You are a marketing analytics expert analyzing month-to-month performance trends for a real estate marketing client.

Current Date: ${currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
Current Season: ${isWinter ? 'Winter (November - March)' : 'Spring/Summer/Fall'}

IMPORTANT CONTEXT:
- This is a real estate marketing dashboard
- Winter months (November - March) are typically slower in real estate despite potential increases in rankings/traffic
- Rankings and traffic improvements may not immediately translate to leads/closes during winter
- Focus on actionable insights and trends

Metrics Data (most recent month first):
${JSON.stringify(metricsSummary, null, 2)}
${loomTranscript}

Please provide a concise, professional summary (2-3 paragraphs) analyzing:
1. Month-to-month trends in key metrics (leads, traffic, ROI, ad spend)
2. Notable changes or patterns
3. Contextual insights considering the current season (especially if winter)
4. Any concerns or positive indicators

Write in a clear, professional tone suitable for a client dashboard. Be specific with numbers and percentages where relevant.`

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a marketing analytics expert specializing in real estate marketing. You provide clear, actionable insights based on data trends.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const insights = completion.choices[0]?.message?.content || 'Unable to generate insights at this time.'

    return NextResponse.json({ insights })
  } catch (error: any) {
    console.error('AI Insights API error:', error)
    if (error.message) {
      console.error('Error message:', error.message)
    }
    if (error.response) {
      console.error('OpenAI API response:', JSON.stringify(error.response, null, 2))
    }
    return NextResponse.json(
      { 
        error: 'Failed to generate insights. Please try again or contact support.',
        insights: null 
      },
      { status: 500 }
    )
  }
}
