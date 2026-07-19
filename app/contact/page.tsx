import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { COMPANY, ADDRESS_SINGLE_LINE } from '@/lib/company';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Contact Us — Gurukripa Constructions',
  description:
    'Talk to Bangalore’s trusted Design + Build team for construction packages, architecture, cost-plus contracts, budgets, timelines and project feasibility.',
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_SINGLE_LINE)}&output=embed`;
  const primaryPhone = COMPANY.phones[0];
  const secondaryPhone = COMPANY.phones[1];
  const primaryPhoneClean = primaryPhone.replace(/\s/g, '');
  const whatsappUrl = `https://wa.me/${primaryPhoneClean.replace('+', '')}`;

  return (
    <>
      <RevealOnScroll />

      <main className="bg-bone min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
        {/* Background Aurora */}
        <div className="aurora aurora-soft opacity-60" />

        {/* SECTION 1: HERO & TOP CONTACT CARDS */}
        <section className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-[11px] font-semibold tracking-wider uppercase mb-5" data-reveal>
                Contact Gurukripa
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-light tracking-tight leading-[1.08]" data-reveal data-reveal-delay="80">
                Contact us
              </h1>
              <p className="mt-5 text-ink/75 leading-relaxed text-[16px] sm:text-[17px] max-w-2xl" data-reveal data-reveal-delay="160">
                Talk to Bangalore&rsquo;s trusted Design + Build team for construction packages,
                architecture, cost-plus contracts, budgets, timelines and project feasibility.
              </p>
            </div>

            {/* Right Widget: Reach Us Directly */}
            <div className="lg:col-span-4" data-reveal data-reveal-delay="200">
              <div className="glass-strong rounded-2xl p-5 border border-white/80 shadow-md">
                <span className="block text-[11px] font-semibold tracking-widest text-ink/50 uppercase mb-3">
                  Reach us directly
                </span>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${primaryPhoneClean}`}
                    className="flex items-center justify-between w-full bg-brand-red hover:bg-brand-red-deep text-white font-bold px-4 py-3 rounded-xl text-[14px] shadow-sm transition-all transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-[10px] tracking-wider uppercase text-white/80 font-medium block">CALL</span>
                    </span>
                    <span className="font-semibold">{primaryPhone}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-white/80 hover:bg-white text-ink font-semibold px-4 py-3 rounded-xl text-[14px] border border-ink/10 shadow-sm transition-all"
                  >
                    <span className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      <span className="text-[10px] tracking-wider uppercase text-ink/50 font-medium block">WHATSAPP</span>
                    </span>
                    <span className="text-ink/90 font-medium">WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10" data-reveal data-reveal-delay="260">
            {/* Card 1: Call */}
            <div className="glass rounded-2xl p-6 border border-white/70 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase block">CALL US</span>
                  <p className="font-bold text-ink text-[16px]">{primaryPhone}</p>
                </div>
              </div>
              <p className="text-[13px] text-ink/70 mb-4 leading-normal">
                Speak directly with a Gurukripa expert.
              </p>
              <a
                href={`tel:${primaryPhoneClean}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-red hover:text-brand-red-deep sweep"
              >
                Call now <span>→</span>
              </a>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="glass rounded-2xl p-6 border border-white/70 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase block">WHATSAPP</span>
                  <p className="font-bold text-ink text-[16px]">Chat with Gurukripa</p>
                </div>
              </div>
              <p className="text-[13px] text-ink/70 mb-4 leading-normal">
                Share your plot details, drawings or project requirement.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-red hover:text-brand-red-deep sweep"
              >
                Start chat <span>→</span>
              </a>
            </div>

            {/* Card 3: Email */}
            <div className="glass rounded-2xl p-6 border border-white/70 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase block">EMAIL</span>
                  <p className="font-bold text-ink text-[14px] truncate max-w-[200px]" title={COMPANY.email}>
                    {COMPANY.email}
                  </p>
                </div>
              </div>
              <p className="text-[13px] text-ink/70 mb-4 leading-normal">
                Send your requirement and our team will respond shortly.
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-red hover:text-brand-red-deep sweep"
              >
                Send email <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: SPLIT CARD (PROCESS STEPPER + CONSULTATION FORM) */}
        <section className="container-wide relative z-10 mt-16 md:mt-24">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 border border-white/80 shadow-xl" data-reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Process & Stepper Flow */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-semibold tracking-wider uppercase mb-4">
                    START HERE
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl text-ink font-light leading-snug">
                    Share your requirement.<br />
                    <em className="font-display-italic text-brand-red">We&rsquo;ll guide the next step.</em>
                  </h2>

                  {/* Quick CTAs */}
                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <a
                      href={`tel:${primaryPhoneClean}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-ink/15 text-[13px] font-semibold text-ink hover:bg-white transition"
                    >
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call now
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-ink/15 text-[13px] font-semibold text-ink hover:bg-white transition"
                    >
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  {/* Stepper Title Header */}
                  <div className="flex items-start gap-3 mt-10 mb-6 p-3.5 rounded-2xl bg-brand-red/5 border border-brand-red/15">
                    <div className="w-9 h-9 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-ink text-[16px]">What happens next?</h3>
                      <p className="text-[13px] text-ink/70">Simple, no-pressure consultation flow</p>
                    </div>
                  </div>

                  {/* 4 Stepper Items */}
                  <div className="relative pl-6 space-y-7 border-l-2 border-brand-red/25 ml-4">
                    {[
                      {
                        num: 1,
                        title: 'Share your details',
                        desc: 'Name, mobile number and the type of project you are planning.',
                      },
                      {
                        num: 2,
                        title: 'Get a callback within 24 hours',
                        desc: 'A Gurukripa consultant will understand your plot, budget and timeline.',
                      },
                      {
                        num: 3,
                        title: 'Explore the right path',
                        desc: 'Discuss packages, Cost-Plus contracts, architecture and feasibility.',
                      },
                      {
                        num: 4,
                        title: 'Move forward with clarity',
                        desc: 'Receive a clear recommendation for estimate, design or site visit.',
                      },
                    ].map((step) => (
                      <div key={step.num} className="relative group">
                        {/* Circle Badge */}
                        <div className="absolute -left-[35px] top-0.5 w-7 h-7 rounded-full bg-brand-red text-white text-[12px] font-bold flex items-center justify-center shadow-sm">
                          {step.num}
                        </div>
                        <h4 className="font-bold text-ink text-[15px]">{step.title}</h4>
                        <p className="text-[13px] text-ink/70 leading-normal mt-0.5">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md">
                  <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block mb-1">
                    FREE CONSULTATION
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-light mb-1">
                    Tell us about your project
                  </h3>
                  <p className="text-[13px] text-ink/70 mb-6">
                    Share your name, mobile and project type &mdash; our team will call you back.
                  </p>

                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: BENGALURU COVERAGE, HEAD OFFICE & INTERACTIVE MAP */}
        <section className="container-wide relative z-10 mt-16 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Coverage & Map */}
            <div className="lg:col-span-7 space-y-8" data-reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-[11px] font-semibold tracking-wider uppercase mb-4">
                  BENGALURU COVERAGE
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-ink font-light leading-tight">
                  We build across Bangalore and surrounding areas
                </h2>
                <p className="mt-4 text-ink/75 leading-relaxed text-[15px]">
                  From Whitefield, Sarjapur Road and Electronic City to Yelahanka, KR Puram,
                  Kengeri, Basavanagudi and beyond, Gurukripa supports homeowners with transparent
                  Design + Build execution.
                </p>

                {/* 4 Feature Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
                  {[
                    'B.E. Civil & M.Tech Structural Leadership',
                    '120+ homes & projects delivered',
                    'Cost-Plus & Lump-Sum guidance',
                    'Dedicated engineer supervision',
                  ].map((feature) => (
                    <div key={feature} className="glass rounded-xl p-3.5 flex items-center gap-3 border border-white/70">
                      <div className="w-5 h-5 rounded-full bg-brand-teal/20 text-brand-teal-deep flex items-center justify-center shrink-0 font-bold text-[12px]">
                        ✓
                      </div>
                      <span className="text-[13px] font-medium text-ink/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="glass-strong rounded-2xl p-2.5 border border-white/80 shadow-md">
                <div className="flex items-center justify-between px-3 py-2 text-[12px] text-ink/70">
                  <span className="font-semibold text-ink flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Studio Location &mdash; Basavanagudi
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_SINGLE_LINE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Open in Maps <span>↗</span>
                  </a>
                </div>
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-ink/10">
                  <iframe
                    src={mapsUrl}
                    title={`${COMPANY.name} location map`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[15%]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Head Office Card */}
            <div className="lg:col-span-5" data-reveal data-reveal-delay="160">
              <div className="glass-strong rounded-3xl p-7 sm:p-9 border border-white/80 shadow-lg space-y-6">
                
                {/* Office Header */}
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-brand-red uppercase block mb-1">
                    HEAD OFFICE
                  </span>
                  <h3 className="font-display text-2xl text-ink font-light">
                    {COMPANY.name}
                  </h3>
                  <address className="not-italic text-[14px] text-ink/80 leading-relaxed mt-2">
                    {COMPANY.address.line1}<br />
                    {COMPANY.address.line2}<br />
                    {COMPANY.address.line3}, {COMPANY.address.state} {COMPANY.address.pincode}
                  </address>
                </div>

                {/* Direct Contacts Row */}
                <div className="glass rounded-xl p-4 space-y-2 border border-white/60 text-[13px]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink/60 font-medium">Primary Phone:</span>
                    <a href={`tel:${primaryPhoneClean}`} className="font-bold text-ink hover:text-brand-red">
                      {primaryPhone}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink/60 font-medium">Alternate Phone:</span>
                    <a href={`tel:${secondaryPhone.replace(/\s/g, '')}`} className="font-bold text-ink hover:text-brand-red">
                      {secondaryPhone}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-ink/10">
                    <span className="text-ink/60 font-medium">Email:</span>
                    <a href={`mailto:${COMPANY.email}`} className="font-bold text-ink hover:text-brand-red truncate max-w-[200px]">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Useful Tip Box */}
                <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/20 text-[13px] text-ink/85 flex items-start gap-3">
                  <span className="text-base shrink-0 mt-0.5">✨</span>
                  <p className="leading-snug">
                    Share your plot dimensions, location and expected timeline for a faster, more useful consultation.
                  </p>
                </div>

                {/* Before You Visit Box */}
                <div className="glass rounded-xl p-5 border border-white/60 space-y-3">
                  <h4 className="font-bold text-ink text-[14px]">Before you visit</h4>
                  <ul className="space-y-2 text-[13px] text-ink/80">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red font-bold">✓</span>
                      Book a consultation slot in advance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red font-bold">✓</span>
                      Carry plot dimensions or survey sketch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-red font-bold">✓</span>
                      Share your preferred budget and timeline
                    </li>
                  </ul>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/70 border border-white/90">
                  <div className="w-9 h-9 rounded-xl bg-brand-teal/15 text-brand-teal-deep flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-ink/50 block">OFFICE HOURS</span>
                    <p className="text-[14px] font-bold text-ink">{COMPANY.hours}</p>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${primaryPhoneClean}`}
                    className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-deep text-white font-bold py-3 px-4 rounded-xl text-[13px] shadow-sm transition transform hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Office
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-ink font-semibold py-3 px-4 rounded-xl text-[13px] border border-ink/15 shadow-sm transition"
                  >
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
