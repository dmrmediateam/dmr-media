import sgMail from '@sendgrid/mail';

// Lazily set the API key — deferred until first use so build-time evaluation
// doesn't throw when the env var isn't present in the build environment.
function initSendGrid() {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is required for sending emails')
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return sgMail
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  // UTM tracking fields (optional)
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  first_visit?: string;
}

export interface HomeValuationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  yearBuilt: string;
  message: string;
  // UTM tracking fields (optional)
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  first_visit?: string;
}

export interface ApplicationFormEmailData {
  formName: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Set when the apply modal is abandoned after step 1 (contact) was completed */
  submissionStatus?: 'complete' | 'partial';
  profileType?: string;
  website?: string;
  market?: string;
  annualSalesVolume?: string;
  teamSize?: string;
  biggestChallenge?: string;
  bookingReason?: string[];
  notes?: string;
  submittedAt: string;
  /** Page path (+ query) where the user submitted the apply flow */
  submissionPage?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  /** First-touch path captured when UTM params were stored (session) */
  landing_page?: string;
  first_visit?: string;
}

export interface WebinarRegistrationEmailData {
  name: string;
  email: string;
  phone: string;
  annualVolume?: string;
  teamSize?: string;
  /** Result of the $5M+ volume rule — drives the subject line prefix. */
  qualified: boolean;
  eventDate: string;
  submittedAt: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  first_visit?: string;
}

/**
 * Send Paid Ads Webinar Registration Email.
 *
 * Delivery path that does not depend on the Zapier webhook — if that Zap is off
 * or misconfigured, the registration still reaches a human inbox.
 */
export async function sendWebinarRegistrationEmail(data: WebinarRegistrationEmailData) {
  const {
    name,
    email,
    phone,
    annualVolume,
    teamSize,
    qualified,
    eventDate,
    submittedAt,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    gclid,
    fbclid,
    landing_page,
    first_visit,
  } = data;

  // Front-load qualification so the inbox is triageable at a glance.
  const flag = qualified ? '[QUALIFIED]' : '[DQ]';
  const qualifiedLabel = qualified
    ? 'Qualified — $5M+ annual volume'
    : 'Not qualified — under $5M annual volume';

  const emailContent = {
    to: process.env.WEBINAR_FORM_EMAIL || 'team@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'DMR Media',
    },
    replyTo: email,
    subject: `${flag} Webinar registration - ${name || 'Unknown'}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: #0f0f0f; color: #fff; padding: 24px; border-radius: 8px 8px 0 0; }
            .content { background: #fff; border: 1px solid #e5e5e5; border-top: none; padding: 24px; }
            .badge { display: inline-block; margin-top: 12px; padding: 8px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; background: ${qualified ? '#e8f5ec' : '#fdecec'}; color: ${qualified ? '#1c6b3a' : '#98252b'}; }
            .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #666; margin: 22px 0 10px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: 600; color: #444; margin-right: 6px; }
            .value { color: #111; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin:0;">New Webinar Registration</h2>
              <p style="margin:8px 0 0 0; opacity:.85;">Scaling with Paid Ads &middot; ${eventDate}</p>
              <div class="badge">${qualifiedLabel}</div>
            </div>
            <div class="content">
              <div class="section-title">Contact</div>
              <div class="field"><span class="label">Name:</span><span class="value">${name || 'Not provided'}</span></div>
              <div class="field"><span class="label">Email:</span><span class="value"><a href="mailto:${email}" style="color:#b89649;text-decoration:none;">${email || 'Not provided'}</a></span></div>
              <div class="field"><span class="label">Phone:</span><span class="value"><a href="tel:${phone}" style="color:#b89649;text-decoration:none;">${phone || 'Not provided'}</a></span></div>

              <div class="section-title">Qualification</div>
              <div class="field"><span class="label">Annual sales volume:</span><span class="value">${annualVolume || 'Not provided'}</span></div>
              <div class="field"><span class="label">Team size:</span><span class="value">${teamSize || 'Not provided'}</span></div>
              <div class="field"><span class="label">Status:</span><span class="value">${qualifiedLabel}</span></div>

              <div class="section-title">Attribution</div>
              <div class="field"><span class="label">UTM source:</span><span class="value">${utm_source || '—'}</span></div>
              <div class="field"><span class="label">UTM medium:</span><span class="value">${utm_medium || '—'}</span></div>
              <div class="field"><span class="label">UTM campaign:</span><span class="value">${utm_campaign || '—'}</span></div>
              <div class="field"><span class="label">UTM term:</span><span class="value">${utm_term || '—'}</span></div>
              <div class="field"><span class="label">UTM content:</span><span class="value">${utm_content || '—'}</span></div>
              <div class="field"><span class="label">gclid:</span><span class="value">${gclid || '—'}</span></div>
              <div class="field"><span class="label">fbclid:</span><span class="value">${fbclid || '—'}</span></div>
              <div class="field"><span class="label">First-touch landing:</span><span class="value">${landing_page || '—'}</span></div>
              <div class="field"><span class="label">First visit:</span><span class="value">${first_visit || '—'}</span></div>

              <div class="section-title">Submitted</div>
              <div class="field"><span class="value">${new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span></div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Webinar Registration - Scaling with Paid Ads (${eventDate})
${qualifiedLabel}

CONTACT
Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}

QUALIFICATION
Annual sales volume: ${annualVolume || 'Not provided'}
Team size: ${teamSize || 'Not provided'}
Status: ${qualifiedLabel}

ATTRIBUTION
UTM source: ${utm_source || '—'}
UTM medium: ${utm_medium || '—'}
UTM campaign: ${utm_campaign || '—'}
UTM term: ${utm_term || '—'}
UTM content: ${utm_content || '—'}
gclid: ${gclid || '—'}
fbclid: ${fbclid || '—'}
First-touch landing: ${landing_page || '—'}
First visit: ${first_visit || '—'}

Submitted: ${new Date(submittedAt).toLocaleString()}
    `,
  };

  try {
    await initSendGrid().send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error (webinar registration):', error.response?.body || error);
    throw new Error('Failed to send webinar registration email');
  }
}

/**
 * Send Contact Form Email
 */
export async function sendContactFormEmail(data: ContactFormData) {
  const { name, email, phone, message } = data;

  const emailContent = {
    to: process.env.CONTACT_FORM_EMAIL || 'team@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'DMR Media',
    },
    replyTo: email, // Allow direct reply to the sender
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #b89649 0%, #a27e2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .value { color: #111; font-size: 16px; }
            .message-box { background: #f9f9f9; padding: 20px; border-left: 4px solid #b89649; margin-top: 20px; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
            .divider { height: 1px; background: #e5e5e5; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p style="color: #666; margin-bottom: 30px;">You have received a new contact form submission from your website.</p>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #b89649; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #b89649; text-decoration: none;">${phone || 'Not provided'}</a></div>
              </div>
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on dmrmedia.org</p>
              <p style="color: #b89649; font-weight: 600;">Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
    `,
  };

  try {
    await initSendGrid().send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body || error);
    throw new Error('Failed to send email');
  }
}
export async function sendHomeValuationEmail(data: HomeValuationData) {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    yearBuilt,
    message,
  } = data;

  const fullAddress = `${address}, ${city}, ${state} ${zipCode}`;

  const emailContent = {
    to: process.env.VALUATION_FORM_EMAIL || 'team@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'DMR Media',
    },
    replyTo: email,
    subject: `New Home Valuation Request - ${address}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #b89649 0%, #a27e2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
            .section { margin-bottom: 30px; }
            .section-title { color: #b89649; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 2px solid #b89649; padding-bottom: 8px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { color: #111; font-size: 16px; }
            .property-highlight { background: #f9f9f9; padding: 20px; border-left: 4px solid #b89649; margin: 20px 0; }
            .property-highlight .address { font-size: 20px; color: #111; font-weight: 600; margin-bottom: 10px; }
            .message-box { background: #f9f9f9; padding: 20px; border-radius: 4px; margin-top: 10px; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
            .divider { height: 1px; background: #e5e5e5; margin: 25px 0; }
            @media (max-width: 600px) {
              .grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏡 Home Valuation Request</h1>
              <p>New seller inquiry from your website</p>
            </div>
            <div class="content">
              
              <!-- Property Address Highlight -->
              <div class="property-highlight">
                <div class="address">${fullAddress}</div>
                <div style="color: #666; font-size: 14px;">${propertyType.replace('-', ' ').toUpperCase()}</div>
              </div>

              <!-- Client Information -->
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${firstName} ${lastName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #b89649; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone</div>
                    <div class="value"><a href="tel:${phone}" style="color: #b89649; text-decoration: none;">${phone}</a></div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <!-- Property Details -->
              <div class="section">
                <div class="section-title">Property Details</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Property Type</div>
                    <div class="value">${propertyType.replace('-', ' ')}</div>
                  </div>
                  <div class="field">
                    <div class="label">Year Built</div>
                    <div class="value">${yearBuilt || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Bedrooms</div>
                    <div class="value">${bedrooms || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Bathrooms</div>
                    <div class="value">${bathrooms || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Square Feet</div>
                    <div class="value">${squareFeet ? Number(squareFeet).toLocaleString() + ' sq ft' : 'Not specified'}</div>
                  </div>
                </div>
              </div>

              ${message ? `
              <div class="divider"></div>
              <div class="section">
                <div class="section-title">Additional Information</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              <div class="divider"></div>

              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This valuation request was submitted from the Sellers page on dmrmedia.org</p>
              <p style="color: #b89649; font-weight: 600;">Reply directly to this email to respond to ${firstName} ${lastName}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Home Valuation Request

PROPERTY ADDRESS:
${fullAddress}

CLIENT INFORMATION:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

PROPERTY DETAILS:
Property Type: ${propertyType}
Bedrooms: ${bedrooms || 'Not specified'}
Bathrooms: ${bathrooms || 'Not specified'}
Square Feet: ${squareFeet || 'Not specified'}
Year Built: ${yearBuilt || 'Not specified'}

${message ? `ADDITIONAL INFORMATION:\n${message}\n` : ''}

Submitted: ${new Date().toLocaleString()}
    `,
  };

  try {
    await initSendGrid().send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body || error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send Application Form Email (calendar + landing forms)
 */
export async function sendApplicationFormEmail(data: ApplicationFormEmailData) {
  const {
    formName,
    name,
    firstName,
    lastName,
    email,
    phone,
    submissionStatus = 'complete',
    profileType,
    website,
    market,
    annualSalesVolume,
    teamSize,
    biggestChallenge,
    bookingReason,
    notes,
    submittedAt,
    submissionPage,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    gclid,
    fbclid,
    landing_page,
    first_visit,
  } = data;

  const prettyBookingReasons = bookingReason && bookingReason.length > 0
    ? bookingReason.join(', ')
    : 'Not provided';

  const isPartial = submissionStatus === 'partial';
  const leadKind = isPartial ? 'Partial application (abandoned modal)' : 'New Application Form Submission';
  const subjectLead = isPartial ? `[Partial lead] ${formName}` : `New Application Submission (${formName})`;

  const emailContent = {
    to: process.env.APPLICATION_FORM_EMAIL || 'team@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'DMR Media',
    },
    replyTo: email,
    subject: `${subjectLead} - ${name || `${firstName} ${lastName}`.trim() || 'Unknown'}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: #0f0f0f; color: #fff; padding: 24px; border-radius: 8px 8px 0 0; }
            .content { background: #fff; border: 1px solid #e5e5e5; border-top: none; padding: 24px; }
            .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #666; margin: 20px 0 10px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: 600; color: #444; margin-right: 6px; }
            .value { color: #111; }
            .note { background: #f9f9f9; border-left: 4px solid #0f0f0f; padding: 12px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin:0;">${leadKind}</h2>
              <p style="margin:8px 0 0 0; opacity:.85;">Form: ${formName}</p>
              ${isPartial ? '<p style="margin:12px 0 0 0;padding:10px 12px;background:#fff8e6;border-radius:6px;font-size:14px;">User continued past contact details then closed the site or the form before submitting. Business fields may be incomplete.</p>' : ''}
            </div>
            <div class="content">
              <div class="field"><span class="label">Submission status:</span><span class="value">${submissionStatus}</span></div>
              <div class="field"><span class="label">Name:</span><span class="value">${name || `${firstName} ${lastName}`.trim() || 'Not provided'}</span></div>
              <div class="field"><span class="label">Email:</span><span class="value">${email || 'Not provided'}</span></div>
              <div class="field"><span class="label">Phone:</span><span class="value">${phone || 'Not provided'}</span></div>

              <div class="section-title">Business Details</div>
              <div class="field"><span class="label">Profile Type:</span><span class="value">${profileType || 'Not provided'}</span></div>
              <div class="field"><span class="label">Website:</span><span class="value">${website || 'Not provided'}</span></div>
              <div class="field"><span class="label">Market / City:</span><span class="value">${market || 'Not provided'}</span></div>
              <div class="field"><span class="label">Annual Sales Volume:</span><span class="value">${annualSalesVolume || 'Not provided'}</span></div>
              <div class="field"><span class="label">Team Size:</span><span class="value">${teamSize || 'Not provided'}</span></div>
              <div class="field"><span class="label">Biggest Challenge:</span><span class="value">${biggestChallenge || 'Not provided'}</span></div>
              <div class="field"><span class="label">Booking Reasons:</span><span class="value">${prettyBookingReasons}</span></div>

              <div class="section-title">Additional Notes</div>
              <div class="note">${notes || 'None provided'}</div>

              <div class="section-title">Attribution &amp; submission context</div>
              <div class="field"><span class="label">Submission page:</span><span class="value">${submissionPage || 'Not provided'}</span></div>
              <div class="field"><span class="label">UTM source:</span><span class="value">${utm_source || '—'}</span></div>
              <div class="field"><span class="label">UTM medium:</span><span class="value">${utm_medium || '—'}</span></div>
              <div class="field"><span class="label">UTM campaign:</span><span class="value">${utm_campaign || '—'}</span></div>
              <div class="field"><span class="label">UTM term:</span><span class="value">${utm_term || '—'}</span></div>
              <div class="field"><span class="label">UTM content:</span><span class="value">${utm_content || '—'}</span></div>
              <div class="field"><span class="label">gclid:</span><span class="value">${gclid || '—'}</span></div>
              <div class="field"><span class="label">fbclid:</span><span class="value">${fbclid || '—'}</span></div>
              <div class="field"><span class="label">First-touch landing (session):</span><span class="value">${landing_page || '—'}</span></div>
              <div class="field"><span class="label">First visit (session):</span><span class="value">${first_visit || '—'}</span></div>

              <div class="section-title">Submitted</div>
              <div class="field"><span class="value">${new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span></div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
${leadKind}
Form: ${formName}
Submission status: ${submissionStatus}
${isPartial ? '\nNote: User continued past contact details then closed before final submit. Business fields may be incomplete.\n' : ''}

Name: ${name || `${firstName} ${lastName}`.trim() || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}

Profile Type: ${profileType || 'Not provided'}
Website: ${website || 'Not provided'}
Market / City: ${market || 'Not provided'}
Annual Sales Volume: ${annualSalesVolume || 'Not provided'}
Team Size: ${teamSize || 'Not provided'}
Biggest Challenge: ${biggestChallenge || 'Not provided'}
Booking Reasons: ${prettyBookingReasons}

Notes:
${notes || 'None provided'}

Attribution:
Submission page: ${submissionPage || 'Not provided'}
UTM source: ${utm_source || '—'}
UTM medium: ${utm_medium || '—'}
UTM campaign: ${utm_campaign || '—'}
UTM term: ${utm_term || '—'}
UTM content: ${utm_content || '—'}
gclid: ${gclid || '—'}
fbclid: ${fbclid || '—'}
First-touch landing (session): ${landing_page || '—'}
First visit (session): ${first_visit || '—'}

Submitted: ${new Date(submittedAt).toLocaleString()}
    `,
  };

  try {
    await initSendGrid().send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error (application form):', error.response?.body || error);
    throw new Error('Failed to send application form email');
  }
}

