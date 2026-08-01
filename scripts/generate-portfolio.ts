import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { COMPANY } from '../lib/company';
import { SERVICES } from '../lib/services';
import { PROCESS_STEPS, STATS } from '../lib/process';
import { TESTIMONIALS } from '../lib/testimonials';
import { PROJECTS, Project } from '../lib/projects';

function getFileUrl(relativePath: string): string {
  if (!relativePath) return '';
  try {
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const decodedPath = decodeURIComponent(cleanPath);
    const fullPath = path.join(process.cwd(), 'public', decodedPath);
    if (fs.existsSync(fullPath)) {
      return `file:///${fullPath.replace(/\\/g, '/')}`;
    }
  } catch (err) {
    console.error(`Error resolving file ${relativePath}:`, err);
  }
  return '';
}

async function generatePDF() {
  console.log('Starting redesigned Gurukripa Portfolio PDF generation (Light Professional Theme, 3 Projects/Page)...');

  // Convert key assets to file URLs
  const logoDark = getFileUrl('/logo.svg') || getFileUrl('/logo.png');
  const founderImg = getFileUrl('/founder_anuj_jain.png');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gurukripa Constructions - Executive Portfolio</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0F172A;
      background-color: #FFFFFF;
      font-size: 10pt;
      line-height: 1.45;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      height: 297mm;
      position: relative;
      page-break-after: always;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
    }

    /* COVER PAGE - LIGHT & PRESTIGIOUS */
    .cover-page {
      background: #FFFFFF;
      color: #0F172A;
      justify-content: space-between;
      padding: 16mm 18mm 16mm 18mm;
      border-top: 8px solid #C0322B;
    }

    .cover-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #E2E8F0;
      padding-bottom: 14px;
    }

    .cover-logo {
      height: 48px;
      width: auto;
    }

    .cover-badge {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      color: #C0322B;
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .cover-hero-content {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .cover-subtitle {
      color: #C0322B;
      font-size: 11pt;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-size: 30pt;
      font-weight: 900;
      line-height: 1.1;
      margin: 0 0 14px 0;
      color: #0F172A;
      letter-spacing: -0.5px;
    }

    .cover-desc {
      font-size: 10.5pt;
      color: #475569;
      max-width: 580px;
      line-height: 1.6;
      margin-bottom: 18px;
    }

    .cover-stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 16px;
      margin-top: 15px;
    }

    .stat-card {
      text-align: center;
    }

    .stat-number {
      font-size: 20pt;
      font-weight: 800;
      color: #C0322B;
      line-height: 1;
    }

    .stat-label {
      font-size: 8pt;
      color: #475569;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    .cover-founder-box {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-left: 4px solid #C0322B;
      padding: 14px 18px;
      border-radius: 0 8px 8px 0;
      margin-top: 18px;
    }

    .founder-avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #C0322B;
    }

    .founder-name {
      font-size: 11pt;
      font-weight: 800;
      color: #0F172A;
    }

    .founder-role {
      font-size: 9pt;
      color: #C0322B;
      font-weight: 700;
    }

    .founder-creds {
      font-size: 8pt;
      color: #64748B;
    }

    .cover-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-top: 1px solid #E2E8F0;
      padding-top: 12px;
      font-size: 8.5pt;
      color: #64748B;
    }

    /* INNER PAGES COMMON LAYOUT */
    .inner-page {
      padding: 14mm 16mm 14mm 16mm;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0F172A;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }

    .page-header-title {
      font-size: 14pt;
      font-weight: 800;
      color: #0F172A;
      letter-spacing: -0.3px;
    }

    .page-header-subtitle {
      font-size: 8.5pt;
      color: #C0322B;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .page-footer {
      position: absolute;
      bottom: 8mm;
      left: 16mm;
      right: 16mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #E2E8F0;
      padding-top: 6px;
      font-size: 7.5pt;
      color: #64748B;
    }

    .page-content {
      flex: 1;
    }

    /* ABOUT / EXECUTIVE OVERVIEW PAGE */
    .about-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 16px;
    }

    .section-heading {
      font-size: 11pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 8px;
      border-left: 3px solid #C0322B;
      padding-left: 8px;
    }

    .text-body {
      font-size: 9pt;
      line-height: 1.55;
      color: #334155;
      margin-bottom: 10px;
    }

    .pillar-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 8px;
    }

    .pillar-title {
      font-weight: 700;
      font-size: 9pt;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .pillar-desc {
      font-size: 8pt;
      color: #475569;
      line-height: 1.4;
    }

    /* INDEX TABLE OF CONTENTS */
    .toc-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px;
      margin-top: 12px;
    }

    .toc-item {
      display: flex;
      justify-content: space-between;
      font-size: 8.5pt;
      padding: 5px 0;
      border-bottom: 1px dashed #CBD5E1;
    }

    .toc-item:last-child {
      border-bottom: none;
    }

    .toc-label { font-weight: 600; color: #0F172A; }
    .toc-page { font-weight: 700; color: #C0322B; }

    /* SERVICES PAGE */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .service-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 12px 14px;
      border-top: 3px solid #0F172A;
    }

    .service-card:nth-child(even) {
      border-top-color: #C0322B;
    }

    .service-title {
      font-size: 10.5pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .service-caption {
      font-size: 8pt;
      font-weight: 700;
      color: #C0322B;
      margin-bottom: 6px;
    }

    .service-desc {
      font-size: 8pt;
      color: #475569;
      line-height: 1.4;
      margin-bottom: 6px;
    }

    .service-bullets {
      margin: 0;
      padding-left: 14px;
      font-size: 7.5pt;
      color: #334155;
    }

    .service-bullets li {
      margin-bottom: 2px;
    }

    /* PROCESS PAGE */
    .process-timeline {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
    }

    .process-step {
      display: flex;
      gap: 12px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    .step-num {
      font-size: 18pt;
      font-weight: 900;
      color: #C0322B;
      line-height: 1;
      width: 35px;
    }

    .step-title {
      font-size: 10pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .step-body {
      font-size: 8.5pt;
      color: #475569;
    }

    /* PROJECT CARDS - 3 PER PAGE OPTIMIZED */
    .project-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 10px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      height: 77mm; /* Exact fit for 3 per A4 page */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #F1F5F9;
      padding-bottom: 5px;
      margin-bottom: 6px;
    }

    .project-name {
      font-size: 11pt;
      font-weight: 800;
      color: #0F172A;
      line-height: 1.2;
    }

    .project-location {
      font-size: 8pt;
      color: #64748B;
      font-weight: 600;
    }

    .project-badges {
      display: flex;
      gap: 4px;
    }

    .badge {
      font-size: 7pt;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .badge-residential { background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; }
    .badge-commercial { background: #FEF3C7; color: #B45309; border: 1px solid #FDE68A; }
    .badge-completed { background: #ECFDF5; color: #047857; border: 1px solid #A7F3D0; }
    .badge-ongoing { background: #FFF7ED; color: #C2410C; border: 1px solid #FFEDD5; }

    .project-main-layout {
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      gap: 10px;
      flex: 1;
      align-items: center;
    }

    .project-img-box {
      width: 100%;
      height: 52mm;
      border-radius: 6px;
      overflow: hidden;
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
    }

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 52mm;
    }

    .project-meta-table {
      width: 100%;
      font-size: 7.5pt;
      border-collapse: collapse;
      margin-bottom: 4px;
      background: #F8FAFC;
      border-radius: 4px;
      overflow: hidden;
    }

    .project-meta-table td {
      padding: 3px 6px;
      border-bottom: 1px solid #E2E8F0;
    }

    .project-meta-table td.meta-label {
      font-weight: 700;
      color: #475569;
      width: 32%;
    }

    .project-meta-table td.meta-val {
      color: #0F172A;
      font-weight: 600;
    }

    .case-box {
      font-size: 7.5pt;
      line-height: 1.35;
    }

    .case-item {
      margin-bottom: 3px;
    }

    .case-title {
      font-weight: 800;
      color: #0F172A;
      display: inline;
    }

    .case-text {
      color: #475569;
      display: inline;
    }

    /* TESTIMONIALS PAGE */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .testimonial-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 14px;
      position: relative;
    }

    .quote-mark {
      font-size: 24pt;
      font-family: Georgia, serif;
      color: #C0322B;
      line-height: 0;
      position: absolute;
      top: 14px;
      left: 12px;
      opacity: 0.25;
    }

    .quote-text {
      font-size: 8.5pt;
      font-style: italic;
      color: #334155;
      line-height: 1.45;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }

    .author-name {
      font-weight: 800;
      font-size: 9pt;
      color: #0F172A;
    }

    .author-role {
      font-size: 7.5pt;
      color: #64748B;
    }

    .stars {
      color: #F59E0B;
      font-size: 8.5pt;
      margin-bottom: 4px;
    }

    /* CONTACT / BACK COVER PAGE */
    .contact-page {
      background-color: #FFFFFF;
      color: #0F172A;
      justify-content: space-between;
      padding: 16mm 18mm 16mm 18mm;
      border-bottom: 8px solid #C0322B;
    }

    .contact-card-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px;
      margin-top: 16px;
    }

    .contact-item {
      display: flex;
      gap: 14px;
      margin-bottom: 16px;
    }

    .contact-icon {
      width: 36px;
      height: 36px;
      background: #FEF2F2;
      border: 1px solid #FECACA;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C0322B;
      font-weight: bold;
    }

    .contact-label {
      font-size: 8pt;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
    }

    .contact-val {
      font-size: 10.5pt;
      color: #0F172A;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- PAGE 1: COVER PAGE - LIGHT & PRESTIGIOUS -->
  <div class="page cover-page">
    <div class="cover-header">
      ${logoDark ? `<img src="${logoDark}" class="cover-logo" alt="Gurukripa Logo" />` : `<h2 style="margin:0; color:#0F172A;">GURUKRIPA</h2>`}
      <div class="cover-badge">Consultants & Builders</div>
    </div>

    <div class="cover-hero-content">
      <div class="cover-subtitle">Engineering & Project Portfolio</div>
      <h1 class="cover-title">Gurukripa Constructions</h1>
      <p class="cover-desc">
        Structural consulting, luxury residential villas, commercial developments, and structural retrofitting built on precision engineering, transparent line-item BOQs, and locked schedule discipline.
      </p>

      <div class="cover-stats-grid">
        ${STATS.map(s => `
          <div class="stat-card">
            <div class="stat-number">${s.value}${s.suffix}</div>
            <div class="stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <div class="cover-founder-box">
        ${founderImg ? `<img src="${founderImg}" class="founder-avatar" alt="Anuj Jain" />` : ''}
        <div>
          <div class="founder-name">${COMPANY.founder.name}</div>
          <div class="founder-role">${COMPANY.founder.role}</div>
          <div class="founder-creds">${COMPANY.founder.credentials}</div>
        </div>
      </div>
    </div>

    <div class="cover-footer">
      <div>Headquarters: ${COMPANY.city}, Karnataka, India</div>
      <div>Official Corporate Publication · Established ${COMPANY.established}</div>
    </div>
  </div>

  <!-- PAGE 2: EXECUTIVE OVERVIEW & TABLE OF CONTENTS -->
  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Executive Overview</div>
        <div class="page-header-title">Company Profile & Track Record</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="about-grid">
        <div>
          <div class="section-heading">Evidence-Led Structural Engineering</div>
          <p class="text-body">
            Gurukripa Constructions is a premier Bengaluru-based structural design and turnkey construction firm founded in 2010. We take a quiet, evidence-led approach to structural design. Every structural member is sized to a rigorous load case modeled in STAAD, ETABS, and SAFE, and put on site only after an independent peer review.
          </p>
          <p class="text-body">
            Over 14+ years, we have engineered and delivered over 1.4 million square feet of bespoke residential villas, commercial complexes, and industrial sites across South India.
          </p>

          <div class="section-heading" style="margin-top:15px;">Founder's Guarantee</div>
          <p class="text-body">
            <em>"Buildings are built to endure for generations. Our responsibility as structural engineers is to ensure every foundation, beam, and slab is executed with complete technical clarity, zero guesswork, and absolute schedule integrity."</em>
          </p>
          <div style="font-weight:800; font-size:9.5pt; color:#0F172A;">
            — Er. Anuj Jain <span style="font-weight:500; color:#64748B;">(B.E. Civil, M.Tech Structural)</span>
          </div>
        </div>

        <div>
          <div class="section-heading">Our Core Operating Pillars</div>

          <div class="pillar-card">
            <div class="pillar-title">1. Independent Peer Review</div>
            <div class="pillar-desc">Every structural calculation is independently verified prior to site execution.</div>
          </div>

          <div class="pillar-card">
            <div class="pillar-title">2. Transparent BOQ Pricing</div>
            <div class="pillar-desc">Detailed line-item quantities priced at market rates with zero soft numbers.</div>
          </div>

          <div class="pillar-card">
            <div class="pillar-title">3. Weekly Progress Reports</div>
            <div class="pillar-desc">Friday site reports with variance tracking delivered directly to client boards.</div>
          </div>

          <div class="pillar-card">
            <div class="pillar-title">4. Certified QA/QC Lab Checks</div>
            <div class="pillar-desc">Cube strength and non-destructive ultrasonic testing at every concrete pour.</div>
          </div>

          <div class="toc-box">
            <div style="font-weight:800; font-size:9pt; color:#0F172A; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.5px;">Portfolio Index</div>
            <div class="toc-item"><span class="toc-label">Executive Overview</span><span class="toc-page">Page 2</span></div>
            <div class="toc-item"><span class="toc-label">Core Specialized Services</span><span class="toc-page">Page 3</span></div>
            <div class="toc-item"><span class="toc-label">5-Step Project Execution Framework</span><span class="toc-page">Page 4</span></div>
            <div class="toc-item"><span class="toc-label">Construction Projects Showcase (8 Projects)</span><span class="toc-page">Pages 5–7</span></div>
            <div class="toc-item"><span class="toc-label">Renovation & Retrofitting Showcase (7 Projects)</span><span class="toc-page">Pages 8–10</span></div>
            <div class="toc-item"><span class="toc-label">Client Endorsements & Testimonials</span><span class="toc-page">Page 11</span></div>
            <div class="toc-item"><span class="toc-label">Corporate Contact Directory</span><span class="toc-page">Page 12</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions · Corporate Portfolio</div>
      <div>Page 2</div>
    </div>
  </div>

  <!-- PAGE 3: CORE SERVICES -->
  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Capabilities</div>
        <div class="page-header-title">Core Specialized Services</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="services-grid">
        ${SERVICES.map(s => `
          <div class="service-card">
            <div class="service-title">${s.title}</div>
            <div class="service-caption">${s.caption}</div>
            <div class="service-desc">${s.description}</div>
            <ul class="service-bullets">
              ${s.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions · Corporate Portfolio</div>
      <div>Page 3</div>
    </div>
  </div>

  <!-- PAGE 4: PROCESS & METHODOLOGY -->
  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Execution Framework</div>
        <div class="page-header-title">Our 5-Step Engineering Process</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="process-timeline">
        ${PROCESS_STEPS.map(step => `
          <div class="process-step">
            <div class="step-num">${step.n}</div>
            <div>
              <div class="step-title">${step.title}</div>
              <div class="step-body">${step.body}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 16px; background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #C0322B; padding:16px; border-radius:0 8px 8px 0; display:flex; gap:16px; align-items:center;">
        <div style="font-size:22pt; color:#C0322B; font-weight:900;">100%</div>
        <div style="font-size:8.5pt; color:#334155; line-height:1.45;">
          <strong style="color:#0F172A;">Structural Warranty & Handover Quality Pack:</strong> Every project delivered comes with an official handover pack containing concrete cube test reports, steel mill certificates, as-built CAD drawings, and a formal structural warranty.
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions · Corporate Portfolio</div>
      <div>Page 4</div>
    </div>
  </div>

  <!-- PROJECTS PAGES (EXACTLY 3 PROJECTS PER PAGE) -->
  ${generateProjectPages(PROJECTS)}

  <!-- TESTIMONIALS PAGE -->
  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Endorsements</div>
        <div class="page-header-title">Client & Industry Testimonials</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="testimonials-grid">
        ${TESTIMONIALS.map(t => `
          <div class="testimonial-card">
            <div class="quote-mark">“</div>
            <div class="stars">★★★★★</div>
            <div class="quote-text">"${t.quote}"</div>
            <div class="author-name">${t.author}</div>
            <div class="author-role">${t.role}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions · Corporate Portfolio</div>
      <div>Page 11</div>
    </div>
  </div>

  <!-- CONTACT & BACK COVER PAGE -->
  <div class="page contact-page">
    <div class="cover-header">
      ${logoDark ? `<img src="${logoDark}" class="cover-logo" alt="Gurukripa Logo" />` : `<h2 style="margin:0; color:#0F172A;">GURUKRIPA</h2>`}
      <div class="cover-badge">Get In Touch</div>
    </div>

    <div>
      <div class="cover-subtitle">Corporate Headquarters</div>
      <h1 class="cover-title" style="font-size: 24pt;">Partner With Us</h1>
      <p class="cover-desc">
        Whether you are planning a luxury private residence, a commercial complex, or require expert structural consultancy and retrofitting, our engineering team is ready to deliver.
      </p>

      <div class="contact-card-box">
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div>
            <div class="contact-label">Office Address</div>
            <div class="contact-val">
              ${COMPANY.address.line1}, ${COMPANY.address.line2}<br/>
              ${COMPANY.address.line3}, ${COMPANY.address.state} ${COMPANY.address.pincode}
            </div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <div class="contact-label">Direct Phone Lines</div>
            <div class="contact-val">${COMPANY.phones.join('  ·  ')}</div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <div>
            <div class="contact-label">Email Communications</div>
            <div class="contact-val">${COMPANY.email}</div>
          </div>
        </div>

        <div class="contact-item" style="margin-bottom:0;">
          <div class="contact-icon">🕒</div>
          <div>
            <div class="contact-label">Working Hours</div>
            <div class="contact-val">${COMPANY.hours}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cover-footer">
      <div>Gurukripa Constructions · Consultants & Builders</div>
      <div>Bengaluru, Karnataka · Page 12</div>
    </div>
  </div>

</body>
</html>
  `;

  const htmlPath = path.join(process.cwd(), 'public', 'portfolio_preview.html');
  const outputPath = path.join(process.cwd(), 'public', 'Gurukripa_Constructions_Portfolio.pdf');
  const artifactPath = path.join(
    'C:\\Users\\kalya\\.gemini\\antigravity-ide\\brain\\99c5557f-f588-4451-a6b5-81c20b6fd1c4',
    'Gurukripa_Constructions_Portfolio.pdf'
  );

  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log(`Saved HTML preview at: ${htmlPath}`);

  // Use Edge headless directly via command execution or Puppeteer with executablePath if available
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const launchOptions: any = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
  };

  if (fs.existsSync(edgePath)) {
    launchOptions.executablePath = edgePath;
  }

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'load' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  // Copy to artifact folder
  fs.copyFileSync(outputPath, artifactPath);

  await browser.close();
  console.log(`✅ PDF portfolio successfully generated at: ${outputPath}`);
  console.log(`✅ Artifact copy saved at: ${artifactPath}`);
}

function generateProjectPages(projects: Project[]): string {
  let html = '';
  const PROJECTS_PER_PAGE = 3; // EXACTLY 3 PROJECTS PER PAGE AS REQUESTED
  let pageCounter = 5;

  for (let i = 0; i < projects.length; i += PROJECTS_PER_PAGE) {
    const chunk = projects.slice(i, i + PROJECTS_PER_PAGE);

    html += `
    <div class="page inner-page">
      <div class="page-header">
        <div>
          <div class="page-header-subtitle">Engineering Case Studies (${i + 1}–${Math.min(i + PROJECTS_PER_PAGE, projects.length)} of ${projects.length})</div>
          <div class="page-header-title">Project Portfolio Showcase</div>
        </div>
      </div>

      <div class="page-content">
        ${chunk.map(p => renderProjectCard(p)).join('')}
      </div>

      <div class="page-footer">
        <div>Gurukripa Constructions · Corporate Portfolio</div>
        <div>Page ${pageCounter}</div>
      </div>
    </div>
    `;
    pageCounter++;
  }
  return html;
}

function renderProjectCard(p: Project): string {
  const heroImgUrl = getFileUrl(p.hero) || getFileUrl(p.thumb);
  const catBadgeClass = p.category === 'Residential' ? 'badge-residential' : 'badge-commercial';
  const statusBadgeClass = p.status === 'Completed' ? 'badge-completed' : 'badge-ongoing';

  return `
    <div class="project-card">
      <div class="project-header">
        <div>
          <div class="project-name">${p.name}</div>
          <div class="project-location">📍 ${p.location}</div>
        </div>
        <div class="project-badges">
          <span class="badge ${catBadgeClass}">${p.category}</span>
          <span class="badge ${statusBadgeClass}">${p.status}</span>
        </div>
      </div>

      <div class="project-main-layout">
        <div>
          <div class="project-img-box">
            ${heroImgUrl ? `<img src="${heroImgUrl}" class="project-img" alt="${p.name}" />` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94A3B8;font-size:8pt;">No Image</div>`}
          </div>
        </div>

        <div class="project-details">
          <table class="project-meta-table">
            <tr>
              <td class="meta-label">Area:</td>
              <td class="meta-val">${p.area}</td>
              <td class="meta-label">Year:</td>
              <td class="meta-val">${p.year}</td>
            </tr>
            <tr>
              <td class="meta-label">System:</td>
              <td class="meta-val" colspan="3">${p.system}</td>
            </tr>
          </table>

          <div class="case-box">
            <div class="case-item">
              <div class="case-title">Challenge: </div>
              <div class="case-text">${p.problem}</div>
            </div>
            <div class="case-item">
              <div class="case-title">Solution: </div>
              <div class="case-text">${p.solution}</div>
            </div>
            <div class="case-item" style="margin-bottom:0;">
              <div class="case-title">Outcome: </div>
              <div class="case-text">${p.outcome}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

generatePDF().catch(console.error);
