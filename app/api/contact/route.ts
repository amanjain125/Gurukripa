import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, phone, email, projectType, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 422 });
  }

  // TODO: integrate Resend / Formspree / your CRM via CONTACT_FORM_ENDPOINT
  // For now, log + return 200 so the form behaves correctly in dev.
  // eslint-disable-next-line no-console
  console.log('[contact]', { name, phone, email, projectType, message, t: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
