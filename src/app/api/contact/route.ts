import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET /api/contact — health check (does NOT leak secrets)
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  return NextResponse.json({
    ok: Boolean(apiKey && to),
    RESEND_API_KEY_present: Boolean(apiKey),
    CONTACT_TO_present: Boolean(to),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const { name, email, message } =
      (body ?? {}) as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    if (!apiKey || !to) {
      console.error('Contact API: missing RESEND_API_KEY or CONTACT_TO');
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // works without domain verification
      to,
      replyTo: email, // camelCase key
      subject: `Contact form message from ${name}`,
      text: message,
      html: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      // bubble a readable reason to the client to debug quickly
      return NextResponse.json(
        { error: typeof error === 'string' ? error : 'Email provider error' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('Contact API error:', err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
