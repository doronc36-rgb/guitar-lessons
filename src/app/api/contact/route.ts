import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
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
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });
    
    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      // Still return success to user but log the email failure
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
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_u721uc1',
        template_id: 'template_l5ft5fd',
        user_id: 'WzU794H4Oqhte6XWQ',
        template_params: {
          to_email: 'doron.c@live.com',
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
    } else {
      return { success: false, error: 'EmailJS API error' };
    }
  } catch (error) {
    return { success: false, error: error };
  }
}
