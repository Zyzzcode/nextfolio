import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const { name, email, message } =
      (body ?? {}) as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO;
    if (!process.env.RESEND_API_KEY || !to) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO');
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const subject = `Contact form message from ${name}`;
    const html = `
      <p><b>From:</b> ${name} &lt;${email}&gt;</p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Note: 'onboarding@resend.dev' works without domain verification.
    const { error } = await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to,
  replyTo: email,   // ✅ correct
  subject,
  text: message,
  html,
});


    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
