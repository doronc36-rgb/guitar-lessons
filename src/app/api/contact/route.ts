import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (per IP). Note: best-effort in serverless.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;   // max per window
const ipToRequests: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = ipToRequests.get(ip) || [];
  const recent = timestamps.filter((t) => t > windowStart);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) return true;
  recent.push(now);
  ipToRequests.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();

    // Server-side validation
    const name = (body?.name ?? '').toString().trim();
    const email = (body?.email ?? '').toString().trim();
    const message = (body?.message ?? '').toString(); // optional, can be empty
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email';
    if (Object.keys(errors).length) {
      return NextResponse.json({ error: 'Invalid input', fields: errors }, { status: 400 });
    }
    
    // Log the contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      message: body.message,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });
    
    // Send email notification to you
    const emailResult = await sendContactEmail({
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip
    });
    
    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json({ ok: false, error: 'Email failed to send', details: String(emailResult.error ?? '') }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Email service using EmailJS (free service)
async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  userAgent: string;
  ip: string;
}) {
  try {
    // Using EmailJS REST API (free tier: 200 emails/month)
    const serviceId = process.env.EMAILJS_SERVICE_ID || 'service_u721uc1';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || 'template_l5ft5fd';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'WzU794H4Oqhte6XWQ';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'doron.c@live.com';

    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: toEmail,
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          timestamp: data.timestamp,
          user_agent: data.userAgent,
          ip_address: data.ip,
          subject: `New Contact Form Message from ${data.name}`,
        }
      })
    });

    if (emailJSResponse.ok) {
      return { success: true };
    }

    const errorText = await emailJSResponse.text();
    return { success: false, error: `EmailJS API error: ${errorText}` };
  } catch (error) {
    return { success: false, error: error };
  }
}
