import type { Metadata } from 'next';
import { CareersForm } from '@/components/sections/CareersForm';
import { COMPANY, ADDRESS_SINGLE_LINE } from '@/lib/company';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Careers — Gurukripa Constructions',
  description: 'Join the Gurukripa Constructions team. Apply for site engineering, architecture, and interior design positions.',
};

export default function CareersPage() {
  const primaryPhone = COMPANY.phones[0];
  const primaryPhoneClean = primaryPhone.replace(/\s/g, '');
  const whatsappUrl = `https://wa.me/${primaryPhoneClean.replace('+', '')}`;

  return (
    <>
      <RevealOnScroll />

      <main className="bg-bone min-h-screen pt-28 md:pt-36 pb-24 relative overflow-hidden">
        {/* Background Aurora */}
        <div className="aurora aurora-soft opacity-60" />

        {/* SECTION 1: HERO */}
        <section className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FCECE8] border border-brand-red/35 text-brand-red text-[12px] font-extrabold tracking-[0.25em] uppercase mb-6 shadow-sm" data-reveal>
                JOIN THE TEAM
              </div>
              <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.05]" data-reveal data-reveal-delay="80">
                Careers at Gurukripa
              </h1>
              <p className="mt-6 text-ink/80 leading-relaxed text-[18px] sm:text-[20px] max-w-2xl font-normal" data-reveal data-reveal-delay="160">
                We are always looking for talented and passionate individuals to join our growing team. If you are driven by quality engineering and excellence, we want to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: FORM */}
        <section className="container-wide relative z-10 mt-12 md:mt-16">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 border border-white/80 shadow-xl overflow-hidden" data-reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Info */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div>
                  <h2 className="font-extrabold text-4xl sm:text-5xl text-ink leading-tight">
                    Apply for an open position
                  </h2>
                  
                  <div className="mt-8 space-y-6">
                    <div className="p-5 rounded-2xl bg-white/70 border border-white/90 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[16px] text-ink">Growth & Opportunity</h4>
                        <p className="text-[14.5px] text-ink/75 mt-1 leading-relaxed">Work on premium projects across Bengaluru, from residential to large scale commercial spaces.</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/70 border border-white/90 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/15 text-brand-teal-deep flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[16px] text-ink">Great Team Culture</h4>
                        <p className="text-[14.5px] text-ink/75 mt-1 leading-relaxed">Collaborate with experienced structural engineers, architects, and industry experts.</p>
                      </div>
                    </div>
                  </div>

                  {/* Reach Us Directly Section */}
                  <div className="mt-12">
                    <span className="block text-[12px] font-extrabold tracking-[0.2em] text-ink/60 uppercase mb-4">
                      HAVE QUESTIONS?
                    </span>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 border border-ink/15 text-[14px] font-bold text-ink hover:border-brand-red hover:text-brand-red hover:shadow-sm transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email HR
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 border border-ink/15 text-[14px] font-bold text-ink hover:border-brand-red hover:text-brand-red hover:shadow-sm transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6 lg:pl-4 mt-8 lg:mt-0">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/90 shadow-md overflow-hidden">
                  <span className="text-[12px] font-extrabold tracking-widest text-brand-red uppercase block mb-1.5">
                    APPLICATION FORM
                  </span>
                  <h3 className="font-extrabold text-3xl text-ink mb-1.5">
                    Submit your profile
                  </h3>
                  <p className="text-[15px] text-ink/75 mb-7">
                    Fill out the form below and attach your resume. We will get back to you if your profile matches our requirements.
                  </p>

                  <CareersForm />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
