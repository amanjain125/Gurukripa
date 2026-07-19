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
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FCECE8] border border-brand-red/35 text-brand-red text-[12px] font-extrabold tracking-[0.25em] uppercase mb-6 shadow-sm" data-reveal>
                CONTACT GURUKRIPA
              </div>
              <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.05]" data-reveal data-reveal-delay="80">
                Contact us
              </h1>
              <p className="mt-6 text-ink/80 leading-relaxed text-[18px] sm:text-[20px] max-w-2xl font-normal" data-reveal data-reveal-delay="160">
                Talk to Bangalore&rsquo;s trusted Design + Build team for construction packages,
                architecture, cost-plus contracts, budgets, timelines and project feasibility.
              </p>
            </div>

            {/* Right Widget: Reach Us Directly */}
            <div className="lg:col-span-4" data-reveal data-reveal-delay="200">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-white shadow-lg">
                <span className="block text-[12px] font-extrabold tracking-[0.2em] text-ink/60 uppercase mb-4">
                  REACH US DIRECTLY
                </span>
                <div className="space-y-3.5">
                  {/* Call Button */}
                  <a
                    href={`tel:${primaryPhoneClean}`}
                    className="flex items-center gap-4 w-full bg-brand-red hover:bg-brand-red-deep text-white p-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand-red flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[11px] font-extrabold tracking-wider uppercase text-white/85">CALL</span>
                      <span className="font-extrabold text-[18px] text-white tracking-tight leading-tight block truncate">{primaryPhone}</span>
                    </div>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full bg-slate-50/90 hover:bg-white text-ink p-4 rounded-2xl border border-slate-200/80 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 text-brand-red flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[11px] font-extrabold tracking-wider uppercase text-ink/50">WHATSAPP</span>
                      <span className="font-extrabold text-[18px] text-ink tracking-tight leading-tight block truncate">WhatsApp Us</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-reveal data-reveal-delay="260">
            {/* Card 1: Call */}
            <a
              href={`tel:${primaryPhoneClean}`}
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/90 hover:border-brand-red hover:shadow-[0_16px_32px_rgba(192,50,43,0.15)] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block">CALL US</span>
                  <p className="font-extrabold text-ink text-[18px] tracking-tight truncate">{primaryPhone}</p>
                </div>
              </div>
              <p className="text-[15px] text-ink/80 mb-5 leading-relaxed">
                Speak directly with a Gurukripa expert.
              </p>
              <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-brand-red group-hover:text-brand-red-deep">
                Call now <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </span>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/90 hover:border-brand-red hover:shadow-[0_16px_32px_rgba(192,50,43,0.15)] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block">WHATSAPP</span>
                  <p className="font-extrabold text-ink text-[18px] tracking-tight truncate">Chat with Gurukripa</p>
                </div>
              </div>
              <p className="text-[15px] text-ink/80 mb-5 leading-relaxed">
                Share your plot details, drawings or project requirement.
              </p>
              <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-brand-red group-hover:text-brand-red-deep">
                Start chat <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </span>
            </a>

            {/* Card 3: Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/90 hover:border-brand-red hover:shadow-[0_16px_32px_rgba(192,50,43,0.15)] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block">EMAIL</span>
                  <p className="font-extrabold text-ink text-[15px] truncate max-w-full" title={COMPANY.email}>
                    {COMPANY.email}
                  </p>
                </div>
              </div>
              <p className="text-[15px] text-ink/80 mb-5 leading-relaxed">
                Send your requirement and our team will respond shortly.
              </p>
              <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-brand-red group-hover:text-brand-red-deep">
                Send email <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </span>
            </a>
          </div>
        </section>

        {/* SECTION 2: SPLIT CARD (PROCESS STEPPER + CONSULTATION FORM) */}
        <section className="container-wide relative z-10 mt-16 md:mt-24">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 border border-white/80 shadow-xl overflow-hidden" data-reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Process & Stepper Flow */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#FCECE8] border border-brand-red/35 text-brand-red text-[12px] font-extrabold tracking-[0.25em] uppercase mb-5">
                    START HERE
                  </div>
                  <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight">
                    Share your requirement.<br />
                    We&rsquo;ll guide the next step.
                  </h2>

                  {/* Quick CTAs */}
                  <div className="flex flex-wrap items-center gap-3.5 mt-6">
                    <a
                      href={`tel:${primaryPhoneClean}`}
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 border border-ink/15 text-[14px] font-bold text-ink hover:border-brand-red hover:text-brand-red hover:shadow-sm transition-all"
                    >
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call now
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 border border-ink/15 text-[14px] font-bold text-ink hover:border-brand-red hover:text-brand-red hover:shadow-sm transition-all"
                    >
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  {/* Stepper Title Header */}
                  <div className="flex items-start gap-4 mt-10 mb-7 p-4 rounded-2xl bg-brand-red/5 border border-brand-red/15">
                    <div className="w-11 h-11 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-ink text-[18px]">What happens next?</h3>
                      <p className="text-[14.5px] text-ink/75 font-medium">Simple, no-pressure consultation flow</p>
                    </div>
                  </div>

                  {/* 4 Stepper Items */}
                  <div className="relative pl-7 space-y-8 border-l-2 border-brand-red/30 ml-4">
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
                        <div className="absolute -left-[39px] top-0.5 w-8 h-8 rounded-full bg-brand-red text-white text-[13px] font-extrabold flex items-center justify-center shadow-sm">
                          {step.num}
                        </div>
                        <h4 className="font-extrabold text-ink text-[17px]">{step.title}</h4>
                        <p className="text-[14.5px] text-ink/75 leading-relaxed mt-1">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6 lg:pl-4">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/90 shadow-md overflow-hidden">
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block mb-1.5">
                    FREE CONSULTATION
                  </span>
                  <h3 className="font-extrabold text-3xl sm:text-4xl text-ink mb-1.5">
                    Tell us about your project
                  </h3>
                  <p className="text-[15px] text-ink/75 mb-7">
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
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#FCECE8] border border-brand-red/35 text-brand-red text-[12px] font-extrabold tracking-[0.25em] uppercase mb-5">
                  BENGALURU COVERAGE
                </div>
                <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight">
                  We build across Bangalore and surrounding areas
                </h2>
                <p className="mt-5 text-ink/80 leading-relaxed text-[17px]">
                  From Whitefield, Sarjapur Road and Electronic City to Yelahanka, KR Puram,
                  Kengeri, Basavanagudi and beyond, Gurukripa supports homeowners with transparent
                  Design + Build execution.
                </p>

                {/* 4 Feature Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
                  {[
                    'B.E. Civil & M.Tech Structural Leadership',
                    '120+ homes & projects delivered',
                    'Cost-Plus & Lump-Sum guidance',
                    'Dedicated engineer supervision',
                  ].map((feature) => (
                    <div key={feature} className="glass rounded-2xl p-4 flex items-center gap-3.5 border border-white/70 hover:border-brand-red/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal-deep flex items-center justify-center shrink-0 font-bold text-[13px]">
                        ✓
                      </div>
                      <span className="text-[14.5px] font-semibold text-ink/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="glass-strong rounded-3xl p-3 border border-white/80 shadow-md hover:border-brand-red/30 transition-colors overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 text-[13px] text-ink/80">
                  <span className="font-bold text-ink flex items-center gap-2">
                    <svg className="w-4.5 h-4.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Studio Location &mdash; Basavanagudi
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_SINGLE_LINE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red font-extrabold hover:underline inline-flex items-center gap-1"
                  >
                    Open in Maps <span>↗</span>
                  </a>
                </div>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-ink/10">
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
              <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg space-y-6 overflow-hidden">
                
                {/* Office Header */}
                <div>
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block mb-1.5">
                    HEAD OFFICE
                  </span>
                  <h3 className="font-extrabold text-3xl text-ink">
                    {COMPANY.name}
                  </h3>
                  <address className="not-italic text-[15px] text-ink/80 leading-relaxed mt-2.5 font-medium">
                    {COMPANY.address.line1}<br />
                    {COMPANY.address.line2}<br />
                    {COMPANY.address.line3}, {COMPANY.address.state} {COMPANY.address.pincode}
                  </address>
                </div>

                {/* Direct Contacts Row */}
                <div className="glass rounded-2xl p-4 space-y-2.5 border border-white/60 text-[14px] overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink/65 font-medium">Primary Phone:</span>
                    <a href={`tel:${primaryPhoneClean}`} className="font-extrabold text-ink hover:text-brand-red">
                      {primaryPhone}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink/65 font-medium">Alternate Phone:</span>
                    <a href={`tel:${secondaryPhone.replace(/\s/g, '')}`} className="font-extrabold text-ink hover:text-brand-red">
                      {secondaryPhone}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-ink/10">
                    <span className="text-ink/65 font-medium">Email:</span>
                    <a href={`mailto:${COMPANY.email}`} className="font-extrabold text-ink hover:text-brand-red truncate max-w-full">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Useful Tip Box */}
                <div className="p-4 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-[14.5px] text-ink/90 flex items-start gap-3.5 font-medium">
                  <span className="text-lg shrink-0 mt-0.5">✨</span>
                  <p className="leading-relaxed">
                    Share your plot dimensions, location and expected timeline for a faster, more useful consultation.
                  </p>
                </div>

                {/* Before You Visit Box */}
                <div className="glass rounded-2xl p-5 border border-white/60 space-y-3.5">
                  <h4 className="font-extrabold text-ink text-[16px]">Before you visit</h4>
                  <ul className="space-y-2.5 text-[14.5px] text-ink/85 font-medium">
                    <li className="flex items-center gap-2.5">
                      <span className="text-brand-red font-bold">✓</span>
                      Book a consultation slot in advance
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-brand-red font-bold">✓</span>
                      Carry plot dimensions or survey sketch
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-brand-red font-bold">✓</span>
                      Share your preferred budget and timeline
                    </li>
                  </ul>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-white/90 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-brand-teal/15 text-brand-teal-deep flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase text-ink/50 block">OFFICE HOURS</span>
                    <p className="text-[15.5px] font-extrabold text-ink">{COMPANY.hours}</p>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <a
                    href={`tel:${primaryPhoneClean}`}
                    className="flex items-center gap-3.5 bg-brand-red hover:bg-brand-red-deep text-white p-3.5 rounded-2xl shadow-md transition transform hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-red flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[9.5px] font-extrabold tracking-wider uppercase text-white/80">CALL OFFICE</span>
                      <span className="font-extrabold text-[15px] text-white block truncate">Call Now</span>
                    </div>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 bg-slate-50/90 hover:bg-white text-ink p-3.5 rounded-2xl border border-slate-200/80 shadow-sm transition transform hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 text-brand-red flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block text-[9.5px] font-extrabold tracking-wider uppercase text-ink/40">WHATSAPP</span>
                      <span className="font-extrabold text-[15px] text-ink block truncate">WhatsApp Us</span>
                    </div>
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
