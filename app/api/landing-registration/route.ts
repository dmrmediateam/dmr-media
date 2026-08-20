import { NextResponse } from 'next/server';
import { DEFAULT_HONEYPOT_FIELDS, isSpam } from '@/lib/spam-filter';
import { isQualifiedWebinarVolume } from '@/lib/landing/webinar-qualification';

/**
 * Landing Page Registration API Route
 * Handles form submissions from the Add Listings landing page
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Parse request body
    const body = await request.json();

    const source = body.source || 'add-listings-landing';
    const isFeb2026 = source === 'feb-2026-landing';

    // SPAM CHECK — runs before validation so a filtered post is indistinguishable
    // from a real one. `website` IS a decoy on this endpoint (no form that posts
    // here collects a real website), which is why it is added to the defaults.
    const spamReasons = isSpam(body, {
      honeypotFields: [...DEFAULT_HONEYPOT_FIELDS, 'website'],
    });
    if (spamReasons.length > 0) {
      console.warn('[LandingRegistration] blocked likely spam', { reasons: spamReasons, ip, source });
      return NextResponse.json(
        {
          success: true,
          message: "Application submitted successfully! We'll review your application and send you access details shortly.",
          filtered: true,
          ...(isFeb2026 && {
            qualified: true,
            averageSalePriceInt: 0,
            homesSold2025Int: 0,
          }),
          ...(source === 'paid-ads-webinar-landing' && { qualified: true }),
        },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }
    
    // For feb-2026 landing, also require average sale price and homes sold
    if (isFeb2026 && (!body.averageSalePrice || !body.homesSold2025)) {
      return NextResponse.json(
        { error: 'Missing required fields: average sale price and homes sold in 2025 are required' },
        { status: 400 }
      );
    }

    // BOT PROTECTION: Check for suspicious patterns
    const suspiciousPatterns = [
      /test@test/i,
      /example@example/i,
      /admin@/i,
      /noreply@/i,
      /^[a-z]+\d+@/i, // Pattern like user123@
    ];

    if (suspiciousPatterns.some(pattern => pattern.test(body.email))) {
      console.warn('Suspicious email pattern detected:', { ip, email: body.email });
      // Still allow but log it
    }

    // BOT PROTECTION: Check for suspiciously fast submissions
    // (This would require storing timestamps, but we'll add basic validation)
    if (body.name.length < 2 || body.name.length > 100) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      );
    }

    if (body.phone.length < 10 || body.phone.length > 20) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Parse and sanitize inputs
    const eventDate = body.eventDate || (isFeb2026 ? 'February 11th, 2026' : 'January 14th, 2025');
    
    // Parse average sale price as integer (remove $, commas, and spaces) - only for feb-2026
    const averageSalePriceStr = isFeb2026 && body.averageSalePrice 
      ? body.averageSalePrice.trim().replace(/[$, ]/g, '') 
      : '';
    const averageSalePriceInt = isFeb2026 ? (parseInt(averageSalePriceStr, 10) || 0) : 0;
    
    // Parse homes sold 2025 as integer - only for feb-2026
    const homesSold2025Int = isFeb2026 ? (parseInt(body.homesSold2025?.trim() || '0', 10) || 0) : 0;

    // Qualification logic for feb-2026: $350k+ average home price & 12+ listings in 2025
    // Qualification logic for paid-ads-webinar: $5M+ annual sales volume.
    // The rule and the option labels live in lib/landing/webinar-qualification
    // so the form and this route can never disagree about what qualifies.
    const isWebinar = source === 'paid-ads-webinar-landing';
    const isQualified = isFeb2026
      ? (averageSalePriceInt >= 350000 && homesSold2025Int >= 12)
      : isWebinar
        ? isQualifiedWebinarVolume(body.annualVolume)
        : true; // Other landing pages don't have qualification

    const sanitizedData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone.trim().substring(0, 20),
      averageSalePrice: isFeb2026 ? (body.averageSalePrice?.trim().substring(0, 50) || '') : (body.averageSalePrice?.trim().substring(0, 50) || ''),
      homesSold2025: isFeb2026 ? (body.homesSold2025?.trim().substring(0, 20) || '') : (body.homesSold2025?.trim().substring(0, 20) || ''),
      averageSalePriceInt, // Integer version for webhook
      homesSold2025Int, // Integer version for webhook
      qualified: isQualified,
      // Real (non-decoy) optional field: the registrant's current website.
      // Named `currentWebsite` because `website` is a spam decoy on this endpoint.
      currentWebsite: body.currentWebsite?.trim().substring(0, 200) || '',
      // Webinar qualification-friction fields (paid-ads-webinar-landing).
      annualVolume: body.annualVolume?.trim().substring(0, 100) || '',
      teamSize: body.teamSize?.trim().substring(0, 100) || '',
      painPoint: body.painPoint?.trim().substring(0, 200) || '',
      source,
      eventDate,
      timestamp: new Date().toISOString(),
      // Optional UTM parameters
      utm_source: body.utm_source?.trim().substring(0, 200) || '',
      utm_medium: body.utm_medium?.trim().substring(0, 200) || '',
      utm_campaign: body.utm_campaign?.trim().substring(0, 200) || '',
      utm_term: body.utm_term?.trim().substring(0, 200) || '',
      utm_content: body.utm_content?.trim().substring(0, 200) || '',
    };

    // Determine which webhook URL to use based on source
    const isGoogleDirect = source === 'google-direct-landing';
    // Paid Ads webinar leads (qualified and DQ) go to their own Zap. The env var
    // overrides the default so the URL can be rotated without a deploy.
    const PAID_ADS_WEBINAR_WEBHOOK_DEFAULT = 'https://hooks.zapier.com/hooks/catch/21968997/4ti640x/';
    const zapierWebhookUrl = isFeb2026
      ? process.env.ZAPIER_FEB_WEBINAR_WEBHOOK_URL
      : isWebinar
        ? (process.env.ZAPIER_PAID_ADS_WEBINAR_WEBHOOK_URL || PAID_ADS_WEBINAR_WEBHOOK_DEFAULT)
        : isGoogleDirect
          ? process.env.ZAPIER_GOOGLE_DIRECT_WEBHOOK_URL
          : process.env.ZAPIER_LANDING_WEBHOOK_URL;

    const webhookEnvName = isFeb2026
      ? 'ZAPIER_FEB_WEBINAR_WEBHOOK_URL'
      : isWebinar
        ? 'ZAPIER_PAID_ADS_WEBINAR_WEBHOOK_URL'
        : isGoogleDirect
          ? 'ZAPIER_GOOGLE_DIRECT_WEBHOOK_URL'
          : 'ZAPIER_LANDING_WEBHOOK_URL';
    
    console.log('Webhook Configuration:', {
      isFeb2026,
      source,
      webhookUrl: zapierWebhookUrl ? 'Configured' : 'NOT CONFIGURED',
      envVarName: webhookEnvName,
    });
    
    if (!zapierWebhookUrl) {
      console.error(`${webhookEnvName} is not configured. Please add it to your .env.local file.`);
      // Continue without failing the request
    } else {
      try {
      const zapierPayload = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        // For feb-2026, send as integers; for others, only include if present
        ...(isFeb2026 ? {
          averageSalePrice: sanitizedData.averageSalePriceInt,
          homesSold2025: sanitizedData.homesSold2025Int,
          qualified: sanitizedData.qualified,
        } : {
          ...(sanitizedData.averageSalePrice && { averageSalePrice: sanitizedData.averageSalePrice }),
          ...(sanitizedData.homesSold2025 && { homesSold2025: sanitizedData.homesSold2025 }),
        }),
        // Paid Ads webinar qualification fields
        ...(isWebinar && {
          annualVolume: sanitizedData.annualVolume,
          teamSize: sanitizedData.teamSize,
          painPoint: sanitizedData.painPoint,
          qualified: sanitizedData.qualified,
        }),
        ...(sanitizedData.currentWebsite && { currentWebsite: sanitizedData.currentWebsite }),
        source: sanitizedData.source,
        eventDate: sanitizedData.eventDate,
        // Include UTM parameters if present
        ...(sanitizedData.utm_source && { utm_source: sanitizedData.utm_source }),
        ...(sanitizedData.utm_medium && { utm_medium: sanitizedData.utm_medium }),
        ...(sanitizedData.utm_campaign && { utm_campaign: sanitizedData.utm_campaign }),
        ...(sanitizedData.utm_term && { utm_term: sanitizedData.utm_term }),
        ...(sanitizedData.utm_content && { utm_content: sanitizedData.utm_content }),
      };
      
      console.log('Sending webhook payload:', JSON.stringify(zapierPayload, null, 2));
      
      const zapierResponse = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierPayload),
      });

        const responseText = await zapierResponse.text();
        console.log('Webhook response status:', zapierResponse.status, zapierResponse.statusText);
        console.log('Webhook response body:', responseText);

        if (!zapierResponse.ok) {
          console.error('Zapier webhook failed:', {
            status: zapierResponse.status,
            statusText: zapierResponse.statusText,
            body: responseText,
          });
          // Don't fail the request if Zapier fails - log it but continue
        } else {
          console.log('Webhook sent successfully!');
        }
      } catch (zapierError: any) {
        console.error('Zapier webhook error (non-blocking):', {
          error: zapierError.message,
          stack: zapierError.stack,
        });
        // Don't fail the request if Zapier fails
      }
    }

    // For feb-2026, only send to webhook (no email notification)
    // For other landing pages, email notification is handled separately if needed

    // Success response - include qualification status for feb-2026
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully! We'll review your application and send you access details shortly.",
        ...(isFeb2026 && {
          qualified: sanitizedData.qualified,
          averageSalePriceInt: sanitizedData.averageSalePriceInt,
          homesSold2025Int: sanitizedData.homesSold2025Int,
        }),
        ...(isWebinar && { qualified: sanitizedData.qualified }),
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Landing registration API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

