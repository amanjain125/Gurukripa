import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const jobRole = formData.get('jobRole') as string;
    const resume = formData.get('resume') as File | null;

    if (!name || (!email && !phone)) {
      return NextResponse.json({ ok: false, error: 'Please provide your name and contact info.' }, { status: 422 });
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'team@gurukripaconstruction.in';
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.TO_EMAIL || 'gurukripaconstructions3@gmail.com';

    if (!smtpPass) {
      console.error('[careers-api] Missing SMTP_PASS environment variable');
      return NextResponse.json({ ok: false, error: 'Server configuration error.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const attachments = [];
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      });
    }

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #2c3e50; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New Career Application</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Gurukripa Constructions</p>
        </div>
        <div style="padding: 24px; color: #2c3e50;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: 600; width: 140px; border-bottom: 1px solid #f0f0f0;">Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f0f0f0;">Phone Number:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f0f0f0;">Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f0f0f0;">Position:</td><td style="padding: 10px 0; font-weight: 600; color: #c0392b; border-bottom: 1px solid #f0f0f0;">${jobRole}</td></tr>
          </table>
        </div>
        <div style="background-color: #f9f9f9; padding: 16px 24px; text-align: center; border-top: 1px solid #e0e0e0; font-size: 12px; color: #95a5a6;">
          Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: \`"Gurukripa Careers" <\${smtpUser}>\`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: \`New Job Application: \${name} - \${jobRole}\`,
      text: \`Name: \${name}\\nPhone: \${phone}\\nEmail: \${email}\\nPosition: \${jobRole}\`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Failed to submit application';
    console.error('[careers-api] Error:', error);
    return NextResponse.json({ ok: false, error: errMessage }, { status: 500 });
  }
}
