import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, website, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!to || !from) {
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

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from,
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
