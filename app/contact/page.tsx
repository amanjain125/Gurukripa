import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { BusinessCard3D } from '@/components/sections/BusinessCard3D';
import { COMPANY, ADDRESS_SINGLE_LINE } from '@/lib/company';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Contact — Talk to Anuj',
  description:
    'Speak directly to the founder. Phone, email and our Basavanagudi studio address.',
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_SINGLE_LINE)}&output=embed`;

  return (
    <>
      <RevealOnScroll />

      {/* HERO — card front and centre */}
      <section className="pt-32 md:pt-36 pb-16 md:pb-24 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />

        <div className="container-narrow relative z-10 text-center">
          <p className="eyebrow mb-6" data-reveal>Contact</p>
          <h1 className="font-display text-display text-ink" data-reveal data-reveal-delay="80">
            Talk to <em className="font-display-italic text-brand-red">Anuj.</em>
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-ink/70 leading-body" data-reveal data-reveal-delay="160">
            Tap his card below to see the back. Or scroll down and tell us about the brief —
            we&rsquo;ll come back inside two working days.
          </p>
        </div>

        <div className="container-wide relative z-10 mt-16 md:mt-20" data-reveal data-reveal-delay="220">
          <BusinessCard3D />
        </div>
      </section>

      {/* DETAILS + FORM */}
      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft aurora-warm" />
        <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT — Form */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4" data-reveal>Send a brief</p>
            <h2 className="font-display text-h1 text-ink mb-8" data-reveal data-reveal-delay="80">
              Tell us about the project.
            </h2>
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <ContactForm />
            </div>
          </div>

          {/* RIGHT — Info above, Map below */}
          <div className="lg:col-span-5 space-y-6">
            <p className="eyebrow mb-4 lg:mt-[3.6rem]" data-reveal>Direct lines</p>
            <div className="glass rounded-2xl p-6 space-y-5" data-reveal data-reveal-delay="80">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-1.5">Phone</div>
                {COMPANY.phones.map((p) => (
                  <div key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="sweep font-display text-lg text-ink">
                      {p}
                    </a>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-1.5">Email</div>
                <a href={`mailto:${COMPANY.email}`} className="sweep font-display text-lg text-ink break-all">
                  {COMPANY.email}
                </a>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-1.5">Studio</div>
                <address className="not-italic text-ink/85 leading-body text-[14px]">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.line2}<br />
                  {COMPANY.address.line3}<br />
                  {COMPANY.address.state} {COMPANY.address.pincode}
                </address>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-1.5">Hours</div>
                <p className="text-ink/85 text-[14px]">{COMPANY.hours}</p>
              </div>
            </div>

            {/* Map directly below the info */}
            <div className="glass-strong rounded-2xl p-2" data-reveal data-reveal-delay="160">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <iframe
                  src={mapsUrl}
                  title={`${COMPANY.name} location map`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
