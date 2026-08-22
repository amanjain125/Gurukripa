import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  plotSize?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, phone, email, projectType, plotSize, message } = body;

  if (!name || (!email && !phone)) {
    return NextResponse.json({ ok: false, error: 'Please provide your name and phone or email.' }, { status: 422 });
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || 'team@gurukripaconstruction.in';
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail = process.env.TO_EMAIL || 'gurukripaconstructions3@gmail.com';

  if (!smtpPass) {
    console.error('[contact-api] Missing SMTP_PASS environment variable');
    return NextResponse.json({ ok: false, error: 'Server configuration error.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for port 465, false for 587
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #c0392b; color: #ffffff; padding: 24px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New Consultation Request</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Gurukripa Constructions Website Lead</p>
      </div>

      <div style="padding: 24px; color: #2c3e50;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #7f8c8d; border-bottom: 1px solid #f0f0f0;">Name:</td>
            <td style="padding: 10px 0; font-weight: 700; color: #2c3e50; border-bottom: 1px solid #f0f0f0;">${name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #7f8c8d; border-bottom: 1px solid #f0f0f0;">Phone Number:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
              ${phone ? `<a href="tel:${phone}" style="color: #c0392b; font-weight: 700; text-decoration: none;">${phone}</a>` : 'N/A'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #7f8c8d; border-bottom: 1px solid #f0f0f0;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
              ${email ? `<a href="mailto:${email}" style="color: #c0392b; font-weight: 700; text-decoration: none;">${email}</a>` : 'N/A'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #7f8c8d; border-bottom: 1px solid #f0f0f0;">Project / Service:</td>
            <td style="padding: 10px 0; font-weight: 600; color: #2c3e50; border-bottom: 1px solid #f0f0f0;">${projectType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #7f8c8d; border-bottom: 1px solid #f0f0f0;">Plot Dimensions:</td>
            <td style="padding: 10px 0; color: #2c3e50; border-bottom: 1px solid #f0f0f0;">${plotSize || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #7f8c8d; border-bottom: 1px solid #f0f0f0; vertical-align: top;">Project Brief:</td>
            <td style="padding: 10px 0; color: #2c3e50; border-bottom: 1px solid #f0f0f0; white-space: pre-wrap;">${message || 'No additional notes provided.'}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f9f9f9; padding: 16px 24px; text-align: center; border-top: 1px solid #e0e0e0; font-size: 12px; color: #95a5a6;">
        Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST · Sent from Gurukripa Website Form
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Gurukripa Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New Lead: ${name} (${projectType || 'Consultation'})`,
      text: `New Lead Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${projectType}\nPlot Size: ${plotSize}\nMessage: ${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Failed to send email';
    console.error('[contact-api] SMTP Transporter error:', error);
    return NextResponse.json({ ok: false, error: errMessage }, { status: 500 });
  }
}
