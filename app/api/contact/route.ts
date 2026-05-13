import { NextRequest, NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, website, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 });
  }

  const lines = [
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    website ? `Website: ${website}` : null,
    `Email: ${email}`,
    message ? `\nMessage:\n${message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const { error } = await getResend().emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to,
    subject: `Portfolio contact from ${name}`,
    text: lines,
  });

  if (error) {
    if (process.env.NODE_ENV === 'development') console.error('[contact] Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
