import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { pathToFileURL } from 'url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { COMPANY } from '../lib/company';
import { SERVICES } from '../lib/services';
import { PROCESS_STEPS, STATS } from '../lib/process';
import { TESTIMONIALS } from '../lib/testimonials';
import { PROJECTS, Project } from '../lib/projects';

function getBase64DataUrl(filePath: string): string {
  if (!filePath || !fs.existsSync(filePath)) return '';
  try {
    const ext = path.extname(filePath).toLowerCase();
    let mime = 'image/jpeg';
    if (ext === '.png') mime = 'image/png';
    else if (ext === '.svg') mime = 'image/svg+xml';
    else if (ext === '.webp') mime = 'image/webp';
    const buf = fs.readFileSync(filePath);
    return `data:${mime};base64,${buf.toString('base64')}`;
  } catch (err) {
    console.error(`Error reading file for base64: ${filePath}`, err);
    return '';
  }
}

function getFileUrl(relativePath: string): string {
  if (!relativePath) return '';
  try {
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const decodedPath = decodeURIComponent(cleanPath);
    const fullPath = path.join(process.cwd(), 'public', decodedPath);
    return getBase64DataUrl(fullPath);
  } catch (err) {
    console.error(`Error resolving file ${relativePath}:`, err);
  }
  return '';
}

async function getOptimizedImageUrl(relativePath: string): Promise<string> {
  if (!relativePath) return '';
  try {
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const decodedPath = decodeURIComponent(cleanPath);
    const fullPath = path.join(process.cwd(), 'public', decodedPath);

    if (!fs.existsSync(fullPath)) return '';

    const stat = fs.statSync(fullPath);
    // If small file (< 600KB), convert directly to base64
    if (stat.size < 600 * 1024) {
      return getBase64DataUrl(fullPath);
    }

    // Cache lightweight 800px thumbnail in public/.cache/pdf-thumbs
    const cacheDir = path.join(process.cwd(), 'public', '.cache', 'pdf-thumbs');
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const safeFilename = crypto.createHash('md5').update(relativePath).digest('hex') + '.jpg';
    const cachedPath = path.join(cacheDir, safeFilename);

    if (!fs.existsSync(cachedPath)) {
      await sharp(fullPath)
        .resize({ width: 800, withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(cachedPath);
    }

    return getBase64DataUrl(cachedPath);
  } catch (err) {
    console.error(`Error optimizing image ${relativePath}:`, err);
    return getFileUrl(relativePath);
  }
}

async function generatePDF() {
  console.log('Starting redesigned Gurukripa Portfolio PDF generation with full website project metadata...');

  // Convert key assets to file URLs
  const logoDark = getFileUrl('/logo.svg') || getFileUrl('/logo.png');
  const founderImg = getFileUrl('/founder_anuj_jain.png');

  // Separate Construction and Renovation Projects
  const constructionProjects = PROJECTS.filter(p => p.projectType === 'construction');
  const renovationProjects = PROJECTS.filter(p => p.projectType === 'renovation');

  const constSection = await generateProjectSectionPages(constructionProjects, 'Turnkey Construction Showcase', 5, 'Division 01: Construction & New Builds');
  const renoSection = await generateProjectSectionPages(renovationProjects, 'Renovation & Retrofitting Showcase', constSection.nextPage, 'Division 02: Renovation & Retrofitting Scope');

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
      padding: 24px 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0F172A;
      background-color: #323639;
      font-size: 11pt;
      line-height: 1.4;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page {
      width: 210mm;
      height: 297mm;
      position: relative;
      page-break-after: always;
      page-break-inside: avoid;
      overflow: hidden;
      background: #FFFFFF;
      box-sizing: border-box;
      margin: 0 auto 32px auto;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
    }

    @media print {
      body {
        background-color: #FFFFFF !important;
        padding: 0 !important;
        display: block !important;
      }

      .page {
        margin: 0 !important;
        box-shadow: none !important;
      }
    }

    /* COVER PAGE - LIGHT & PRESTIGIOUS */
    .cover-page {
      background: #FFFFFF;
      color: #0F172A;
      padding: 16mm 20mm 16mm 20mm;
      border-top: 8px solid #C0322B;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 297mm;
      box-sizing: border-box;
    }

    .cover-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #E2E8F0;
      padding-bottom: 16px;
    }

    .cover-logo {
      height: 54px;
      width: auto;
    }

    .cover-badge {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      color: #C0322B;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 9.5pt;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .cover-hero-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 36px;
      padding: 30px 0;
    }

    .cover-title-block {
      max-width: 680px;
      margin: 0 auto;
    }

    .cover-subtitle {
      color: #C0322B;
      font-size: 12pt;
      font-weight: 800;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-title {
      font-size: 40pt;
      font-weight: 900;
      line-height: 1.12;
      margin: 0 0 16px 0;
      color: #0F172A;
      letter-spacing: -0.8px;
    }

    .cover-desc {
      font-size: 11.5pt;
      color: #475569;
      max-width: 620px;
      line-height: 1.65;
      margin: 0 auto;
    }

    .cover-stats-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      align-items: center;
    }

    .cover-stats-row {
      display: flex;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
      justify-content: center;
    }

    .cover-stats-top {
      width: 100%;
    }

    .cover-stats-bottom {
      width: 70%;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 0 16px;
      border-right: 1px solid #E2E8F0;
      flex: 1 1 0%;
      min-width: 0;
      justify-content: center;
    }
    
    .stat-card:last-child {
      border-right: none;
    }

    .stat-icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(192, 50, 43, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C0322B;
      background: rgba(192, 50, 43, 0.05);
      flex-shrink: 0;
    }

    .stat-icon-wrapper svg {
      width: 22px;
      height: 22px;
    }
    
    .stat-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .stat-number {
      font-size: 26pt;
      font-weight: 800;
      color: #0F172A;
      line-height: 1;
      display: flex;
      align-items: center;
    }
    
    .stat-suffix {
      color: #C0322B;
    }

    .stat-title {
      font-size: 10pt;
      color: #0F172A;
      font-weight: 700;
      line-height: 1.2;
      margin-top: 6px;
    }
    
    .stat-subtitle {
      font-size: 7pt;
      color: #C0322B;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-top: 4px;
    }

    .cover-founder-box {
      display: flex;
      align-items: center;
      gap: 20px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-left: 5px solid #C0322B;
      padding: 20px 32px;
      border-radius: 0 12px 12px 0;
      width: 100%;
      max-width: 540px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
      text-align: left;
    }

    .founder-avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
      border: 2.5px solid #C0322B;
    }

    .founder-name {
      font-size: 13pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .founder-role {
      font-size: 10pt;
      color: #C0322B;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .founder-creds {
      font-size: 9pt;
      color: #64748B;
    }

    .cover-footer {
      border-top: 1px solid #E2E8F0;
      padding-top: 16px;
      font-size: 8.5pt;
      color: #64748B;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    /* INNER PAGES COMMON LAYOUT */
    .inner-page {
      padding: 12mm 15mm 12mm 15mm;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0F172A;
      padding-bottom: 6px;
      margin-bottom: 10px;
    }

    .page-header-title {
      font-size: 16pt;
      font-weight: 800;
      color: #0F172A;
      letter-spacing: -0.3px;
    }

    .page-header-subtitle {
      font-size: 10pt;
      color: #C0322B;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .page-footer {
      position: absolute;
      bottom: 6mm;
      left: 15mm;
      right: 15mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #E2E8F0;
      padding-top: 5px;
      font-size: 7.5pt;
      color: #64748B;
    }

    .page-content {
      display: block;
    }

    /* ABOUT / EXECUTIVE OVERVIEW PAGE */
    .about-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 16px;
    }

    .section-heading {
      font-size: 18pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 8px;
      border-left: 3px solid #C0322B;
      padding-left: 8px;
    }

    .text-body {
      font-size: 11.5pt;
      line-height: 1.55;
      color: #334155;
      margin-bottom: 12px;
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
      font-size: 11.5pt;
      color: #0F172A;
      margin-bottom: 4px;
    }

    .pillar-desc {
      font-size: 10pt;
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

    /* SERVICES PAGE - 3 CORE DIVISIONS WITH 3 ITEMS EACH */
    .division-stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .division-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 12px;
      border-left: 4px solid #0F172A;
    }

    .division-card:nth-child(2) {
      border-left-color: #C0322B;
    }

    .division-card:nth-child(3) {
      border-left-color: #D4AF37;
    }

    .division-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    .division-title {
      font-size: 14pt;
      font-weight: 800;
      color: #0F172A;
    }

    .division-badge {
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: #FEF2F2;
      color: #C0322B;
      border: 1px solid #FECACA;
      padding: 4px 10px;
      border-radius: 12px;
    }

    .division-desc {
      font-size: 11.5pt;
      color: #475569;
      line-height: 1.35;
      margin-bottom: 10px;
    }

    .subservices-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 12px;
      margin-top: 10px;
    }

    .subservice-box {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 12px 14px;
    }

    .subservice-title {
      font-size: 11pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .subservice-caption {
      font-size: 9pt;
      font-weight: 700;
      color: #C0322B;
      margin-bottom: 6px;
    }

    .subservice-desc {
      font-size: 10pt;
      color: #475569;
      line-height: 1.4;
    }

    .subservice-bullets {
      margin: 6px 0 0 0;
      padding-left: 16px;
      font-size: 10pt;
      color: #334155;
    }

    .subservice-bullets li {
      margin-bottom: 2px;
    }

    /* PROCESS PAGE */
    .process-timeline {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 6px;
    }

    .process-step {
      display: flex;
      gap: 12px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    .step-num {
      font-size: 20pt;
      font-weight: 900;
      color: #C0322B;
      line-height: 1;
      width: 38px;
    }

    .step-title {
      font-size: 13pt;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .step-body {
      font-size: 10.5pt;
      color: #475569;
    }

    /* PROJECT CARDS - PRINT TABLE LAYOUT FOR 100% RELIABILITY */
    .project-card {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 8px;
      padding: 8px 10px;
      margin-bottom: 8px;
      height: 75mm;
      box-sizing: border-box;
      overflow: hidden;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #F1F5F9;
      padding-bottom: 3px;
      margin-bottom: 4px;
    }

    .project-name {
      font-size: 13pt;
      font-weight: 800;
      color: #0F172A;
      line-height: 1.15;
    }

    .project-location {
      font-size: 9pt;
      color: #64748B;
      font-weight: 600;
      margin-top: 2px;
    }

    .project-badges {
      display: flex;
      gap: 6px;
    }

    .badge {
      font-size: 7.5pt;
      font-weight: 800;
      padding: 3px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .badge-residential { background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; }
    .badge-commercial { background: #FEF3C7; color: #B45309; border: 1px solid #FDE68A; }
    .badge-renovation { background: #F3E8FF; color: #7E22CE; border: 1px solid #D8B4FE; }
    .badge-completed { background: #ECFDF5; color: #047857; border: 1px solid #A7F3D0; }
    .badge-ongoing { background: #FFF7ED; color: #C2410C; border: 1px solid #FFEDD5; }

    .project-img-box {
      width: 100%;
      height: 50mm;
      border-radius: 6px;
      overflow: hidden;
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
    }

    .project-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50mm;
      overflow: hidden;
    }

    .project-meta-table {
      width: 100%;
      font-size: 9pt;
      border-collapse: collapse;
      margin-bottom: 8px;
      background: #F8FAFC;
      border-radius: 4px;
      overflow: hidden;
    }

    .project-meta-table td {
      padding: 4px 6px;
      border-bottom: 1px solid #E2E8F0;
    }

    .project-meta-table td.meta-label {
      font-weight: 700;
      color: #475569;
      width: 25%;
    }

    .project-meta-table td.meta-val {
      color: #0F172A;
      font-weight: 600;
      width: 25%;
    }

    .case-box {
      font-size: 11.5pt;
      line-height: 1.4;
      color: #334155;
    }

    /* TESTIMONIALS PAGE */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    .testimonial-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 8px 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quote-mark {
      font-size: 20pt;
      font-family: Georgia, serif;
      color: #C0322B;
      line-height: 0;
      position: absolute;
      top: 10px;
      left: 10px;
      opacity: 0.25;
    }

    .quote-text {
      font-size: 7.8pt;
      font-style: italic;
      color: #334155;
      line-height: 1.35;
      margin-bottom: 4px;
      position: relative;
      z-index: 1;
    }

    .author-name {
      font-weight: 800;
      font-size: 8.5pt;
      color: #0F172A;
    }

    .author-role {
      font-size: 7pt;
      color: #64748B;
    }

    .stars {
      color: #F59E0B;
      font-size: 7.5pt;
      margin-bottom: 2px;
    }

    /* CONTACT / BACK COVER PAGE */
    .contact-page {
      background-color: #FFFFFF;
      color: #0F172A;
      padding: 16mm 18mm 16mm 18mm;
      border-bottom: 8px solid #C0322B;
    }

    .contact-card-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      margin-top: 16px;
      width: 100%;
    }

    .contact-icon {
      width: 32px;
      height: 32px;
      background: #FEF2F2;
      border: 1px solid #FECACA;
      border-radius: 8px;
      text-align: center;
      line-height: 30px;
      color: #C0322B;
      font-weight: bold;
      font-size: 14pt;
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
      line-height: 1.3;
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
      <div class="cover-title-block">
        <div class="cover-subtitle">Engineering & Project Portfolio</div>
        <h1 class="cover-title">Gurukripa Constructions</h1>
        <p class="cover-desc">
          Architectural & Structural Consulting, luxury residential villas, apartment building, commercial developments, and structural retrofitting built on precision engineering, transparent item-wise BOQs, and locked schedule discipline.
        </p>
      </div>

      <div class="cover-stats-container">
        <div class="cover-stats-row cover-stats-top">
          ${STATS.slice(0, 3).map(s => `
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${s.iconPath}" />
                </svg>
              </div>
              <div class="stat-content">
                <div class="stat-number">${s.value}<span class="stat-suffix">${s.suffix}</span></div>
                <div class="stat-title">${s.title}</div>
                <div class="stat-subtitle">${s.subtitle}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="cover-stats-row cover-stats-bottom">
          ${STATS.slice(3, 5).map(s => `
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${s.iconPath}" />
                </svg>
              </div>
              <div class="stat-content">
                <div class="stat-number">${s.value}<span class="stat-suffix">${s.suffix}</span></div>
                <div class="stat-title">${s.title}</div>
                <div class="stat-subtitle">${s.subtitle}</div>
              </div>
            </div>
          `).join('')}
        </div>
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
      <div>Gurukripa Constructions · Established ${COMPANY.established}</div>
      <div>Headquarters: ${COMPANY.city}, Karnataka, India</div>
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
      <div style="margin-bottom: 32px;">
        <div class="section-heading">Evidence-Led Structural Engineering</div>
        <p class="text-body">
          Gurukripa Constructions is a premier Bengaluru-based structural design and turnkey construction firm led by Er. Anuj Jain (B.E. Civil, M.Tech Structural). Established in 2019, we take a quiet, evidence-led approach to structural design. Every structural member is sized to a rigorous load case modeled in ETABS, and SAFE, and put on site.
        </p>
        <p class="text-body">
          Over 7+ years of engineering excellence, we have delivered over 10+ major turnkey construction projects comprising of 92,000+ square feet across Bengaluru, 30+ renovation & retrofitting projects, 30+ architectural & structural design projects.
        </p>

        <div class="section-heading" style="margin-top:15px;">Founder's Guarantee</div>
        <p class="text-body">
          <em>"Buildings are built to endure for generations. Our responsibility as structural engineers and builders is to ensure every foundation, beam, and slab is executed with complete technical clarity, zero guesswork, and absolute structural integrity."</em>
        </p>
        <div style="font-weight:800; font-size:9.5pt; color:#0F172A;">
          — Er. Anuj Jain <span style="font-weight:500; color:#64748B;">(B.E. Civil, M.Tech Structural)</span>
        </div>
      </div>

      <div>
        <div class="section-heading">Our Core Operating Pillars</div>
        <div class="pillar-card">
          <div class="pillar-title">1. Comprehensive Structural Design</div>
          <div class="pillar-desc">Every structural calculation is personally verified prior to site execution.</div>
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
          <div class="pillar-desc">Cube strength and independent steel ultrasonic testing at every concrete pour.</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions</div>
      <div>Page 2</div>
    </div>
  </div>

  <!-- PAGE 3: CORE SERVICES (3 DIVISIONS) -->
  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Capabilities & 3 Key Divisions</div>
        <div class="page-header-title">Core Specialized Services</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="division-stack">
        ${SERVICES.slice(0, 2).map(s => `
          <div class="division-card">
            <div class="division-header">
              <div class="division-title">${s.title}</div>
              <div class="division-badge">${s.divisionCode}</div>
            </div>
            <div class="division-desc">${s.description}</div>

            <div class="subservices-grid">
              ${s.items.map(item => `
                <div class="subservice-box">
                  <div class="subservice-title">${item.title}</div>
                  <div class="subservice-caption">${item.caption}</div>
                  <div class="subservice-desc">${item.description}</div>
                  <ul class="subservice-bullets">
                    ${item.bullets.map(b => `<li>${b}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions</div>
      <div>Page 3</div>
    </div>
  </div>

  <div class="page inner-page">
    <div class="page-header">
      <div>
        <div class="page-header-subtitle">Capabilities & 3 Key Divisions</div>
        <div class="page-header-title">Core Specialized Services (Cont'd)</div>
      </div>
      ${logoDark ? `<img src="${logoDark}" style="height:32px;" />` : ''}
    </div>

    <div class="page-content">
      <div class="division-stack">
        ${SERVICES.slice(2, 3).map(s => `
          <div class="division-card">
            <div class="division-header">
              <div class="division-title">${s.title}</div>
              <div class="division-badge">${s.divisionCode}</div>
            </div>
            <div class="division-desc">${s.description}</div>

            <div class="subservices-grid">
              ${s.items.map(item => `
                <div class="subservice-box">
                  <div class="subservice-title">${item.title}</div>
                  <div class="subservice-caption">${item.caption}</div>
                  <div class="subservice-desc">${item.description}</div>
                  <ul class="subservice-bullets">
                    ${item.bullets.map(b => `<li>${b}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section-heading" style="margin-top: 24px; margin-bottom: 12px;">Our 5-Step Engineering Process</div>

    <div class="page-content" style="padding-top: 0;">
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

      <div style="margin-top: 14px; background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #C0322B; padding:14px 16px; border-radius:0 8px 8px 0; display:flex; gap:16px; align-items:center;">
        <div style="font-size:24pt; color:#C0322B; font-weight:900;">100%</div>
        <div style="font-size:10pt; color:#334155; line-height:1.45;">
          <strong style="color:#0F172A;">Structural Warranty & Handover Quality Pack:</strong> Every project delivered comes with an official handover pack containing concrete cube test reports, steel mill certificates, as-built CAD drawings, and a formal structural warranty.
        </div>
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions</div>
      <div>Page 4</div>
    </div>
  </div>

  <!-- DIVISION 01: TURNKEY CONSTRUCTION PROJECTS -->
  ${constSection.html}

  <!-- DIVISION 02: RENOVATION & RETROFITTING PROJECTS -->
  ${renoSection.html}

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
      <div style="background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%); border: 1px solid #BFDBFE; border-left: 4px solid #C0322B; border-radius: 8px; padding: 10px 14px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 10.5pt; font-weight: 800; color: #0F172A;">5.0 ★★★★★ Verified Client Satisfaction Track Record</div>
          <div style="font-size: 7.8pt; color: #475569; margin-top: 2px;">Over 130+ verified Google reviews across residential villas, commercial complexes & structural retrofits</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 13pt; font-weight: 900; color: #C0322B;">100%</div>
          <div style="font-size: 7pt; font-weight: 700; color: #64748B; text-transform: uppercase;">On-Time Handover</div>
        </div>
      </div>

      <div class="testimonials-grid">
        ${[
      TESTIMONIALS[0], // Afrin Subi Abdul Hameed (long)
      TESTIMONIALS[2], // Vishal Omloti (long)
      TESTIMONIALS[1], // Kunal Mehta
      TESTIMONIALS[3], // Nikhilesh A
      TESTIMONIALS[5], // Shashank Ramamurthy
      TESTIMONIALS[4], // Yogesh Chowdhary
      TESTIMONIALS[6], // Smriti Jain
      TESTIMONIALS[9], // Shree Munisuvrat Wires
      TESTIMONIALS[13], // Saurabh Agarwal
      TESTIMONIALS[14], // Mazhar Khan
    ].map(t => `
          <div class="testimonial-card">
            <div>
              <div class="stars">★★★★★</div>
              <div class="quote-text">"${t.quote}"</div>
            </div>
            <div>
              <div class="author-name">${t.author}</div>
              <div class="author-role">📍 ${t.role || 'Google Verified Review'}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="page-footer">
      <div>Gurukripa Constructions</div>
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

      <table class="contact-card-box">
        <tr>
          <td style="width:44px; vertical-align:top; padding:14px 10px 14px 14px;">
            <div class="contact-icon">📍</div>
          </td>
          <td style="vertical-align:top; padding:14px 14px 14px 0; border-bottom:1px solid #E2E8F0;">
            <div class="contact-label">Office Address</div>
            <div class="contact-val">
              ${COMPANY.address.line1}, ${COMPANY.address.line2}<br/>
              ${COMPANY.address.line3}, ${COMPANY.address.state} ${COMPANY.address.pincode}
            </div>
          </td>
        </tr>

        <tr>
          <td style="width:44px; vertical-align:top; padding:14px 10px 14px 14px;">
            <div class="contact-icon">📞</div>
          </td>
          <td style="vertical-align:top; padding:14px 14px 14px 0; border-bottom:1px solid #E2E8F0;">
            <div class="contact-label">Direct Phone Lines</div>
            <div class="contact-val">${COMPANY.phones.join('  ·  ')}</div>
          </td>
        </tr>

        <tr>
          <td style="width:44px; vertical-align:top; padding:14px 10px 14px 14px;">
            <div class="contact-icon">✉️</div>
          </td>
          <td style="vertical-align:top; padding:14px 14px 14px 0; border-bottom:1px solid #E2E8F0;">
            <div class="contact-label">Email Communications</div>
            <div class="contact-val">${COMPANY.email}</div>
          </td>
        </tr>

        <tr>
          <td style="width:44px; vertical-align:top; padding:14px 10px 14px 14px;">
            <div class="contact-icon">🕒</div>
          </td>
          <td style="vertical-align:top; padding:14px 14px 14px 0;">
            <div class="contact-label">Working Hours</div>
            <div class="contact-val">${COMPANY.hours}</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="cover-footer">
      <div>Gurukripa Constructions</div>
      <div>Page 12</div>
    </div>
  </div>

</body>
</html>
  `;

  const htmlPath = path.join(process.cwd(), 'public', 'portfolio_preview.html');
  const outputPath = path.join(process.cwd(), 'public', 'Gurukripa_Constructions_Portfolio.pdf');
  const artifactDir = process.env.ARTIFACT_DIR || '';
  const artifactPath = artifactDir ? path.join(artifactDir, 'Gurukripa_Constructions_Portfolio.pdf') : '';

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
  const fileUrl = pathToFileURL(htmlPath).href;
  await page.goto(fileUrl, { waitUntil: 'load' });

  // Ensure all image elements are completely loaded in Chrome DOM
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      imgs.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  // Copy to artifact folder if specified
  if (artifactDir && artifactPath) {
    if (!fs.existsSync(artifactDir)) {
      fs.mkdirSync(artifactDir, { recursive: true });
    }
    fs.copyFileSync(outputPath, artifactPath);
    console.log(`✅ Artifact copy saved at: ${artifactPath}`);
  }

  await browser.close();
  console.log(`✅ PDF portfolio successfully generated at: ${outputPath}`);
}

async function generateProjectSectionPages(projects: Project[], title: string, startPage: number, divisionBadge: string): Promise<{ html: string; nextPage: number }> {
  let html = '';
  const PROJECTS_PER_PAGE = 3;
  let pageCounter = startPage;

  for (let i = 0; i < projects.length; i += PROJECTS_PER_PAGE) {
    const chunk = projects.slice(i, i + PROJECTS_PER_PAGE);
    const cardsHtml = await Promise.all(chunk.map((p) => renderProjectCard(p)));

    html += `
    <div class="page inner-page">
      <div class="page-header">
        <div>
          <div class="page-header-subtitle">${divisionBadge} (${i + 1}–${Math.min(i + PROJECTS_PER_PAGE, projects.length)} of ${projects.length})</div>
          <div class="page-header-title">${title}</div>
        </div>
      </div>

      <div class="page-content">
        ${cardsHtml.join('')}

      </div>

      <div class="page-footer">
        <div>Gurukripa Constructions</div>
        <div>Page ${pageCounter}</div>
      </div>
    </div>
    `;
    pageCounter++;
  }
  return { html, nextPage: pageCounter };
}

async function renderProjectCard(p: Project): Promise<string> {
  const heroImgUrl = (await getOptimizedImageUrl(p.hero)) || (await getOptimizedImageUrl(p.thumb));
  const catBadgeClass = p.category === 'Residential' ? 'badge-residential' : (p.category === 'Commercial' ? 'badge-commercial' : 'badge-renovation');
  const statusBadgeClass = p.status === 'Completed' ? 'badge-completed' : 'badge-ongoing';

  const completion = p.completionYear || (p.status === 'Ongoing' ? 'Ongoing' : p.year);
  const commencement = p.commencementYear || p.year;
  const floors = p.floorCount || '—';
  const hasArea = !!p.area;
  const hasFloors = !!p.floorCount;
  const hasCommenced = !!p.commencementYear;
  const hasSystem = !!p.system;

  let metaTableRows = '';
  if (p.projectType === 'renovation' || (!hasArea && !hasFloors && !hasCommenced && !hasSystem)) {
    metaTableRows = `
      <tr>
        <td class="meta-label" style="width:30%;">Completed:</td>
        <td class="meta-val" style="width:70%;">${completion}</td>
      </tr>
    `;
  } else {
    metaTableRows = `
      ${(hasArea || hasFloors) ? `
      <tr>
        <td class="meta-label">Built Area:</td>
        <td class="meta-val">${p.area || '—'}</td>
        <td class="meta-label">Floors:</td>
        <td class="meta-val">${floors}</td>
      </tr>
      ` : ''}
      <tr>
        ${hasCommenced ? `
        <td class="meta-label">Commenced:</td>
        <td class="meta-val">${commencement}</td>
        ` : ''}
        <td class="meta-label" ${!hasCommenced ? 'style="width:30%;"' : ''}>Completed:</td>
        <td class="meta-val" ${!hasCommenced ? 'colspan="3"' : ''}>${completion}</td>
      </tr>
      ${hasSystem ? `
      <tr>
        <td class="meta-label">System:</td>
        <td class="meta-val" colspan="3">${p.system}</td>
      </tr>
      ` : ''}
    `;
  }

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

      <table style="width:100%; border-collapse:collapse; table-layout:fixed; margin-top:4px;">
        <tr>
          <td style="width:42%; vertical-align:top; padding-right:8px;">
            <div class="project-img-box">
              ${heroImgUrl ? `<img src="${heroImgUrl}" class="project-img" alt="${p.name}" />` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94A3B8;font-size:8pt;">No Image</div>`}
            </div>
          </td>
          <td style="width:58%; vertical-align:top;">
            <div class="project-details">
              <table class="project-meta-table">
                ${metaTableRows}
              </table>

              <div class="case-box">
                <div class="case-text">
                  ${p.summary}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

generatePDF().catch(console.error);
