import Link from 'next/link';
import { Logo } from './Logo';
import { COMPANY, NAV_ITEMS } from '@/lib/company';

export function Footer() {
  return (
    <footer className="bg-ink text-bone relative overflow-hidden">
      {/* Subtle aurora on dark */}
      <div className="absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(192,50,43,0.45), transparent 65%)' }} />
      <div className="absolute -bottom-40 -right-20 w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(63,169,161,0.4), transparent 65%)' }} />

      <div className="container-wide pt-24 pb-12 relative z-10">
        <div className="glass-dark rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-display leading-[0.95] text-bone">
                Let&rsquo;s build <em className="font-display-italic text-gold">something</em><br />
                that outlasts us.
              </h2>
              <Link href="/contact" className="btn btn-primary mt-10">
                Start a conversation
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <div className="eyebrow text-bone/55 mb-4">Studio</div>
              <address className="not-italic text-bone/85 leading-body text-[14px]">
                {COMPANY.address.line1}<br />
                {COMPANY.address.line2}<br />
                {COMPANY.address.line3}<br />
                {COMPANY.address.state} {COMPANY.address.pincode}
              </address>
              <div className="eyebrow text-bone/55 mt-8 mb-3">Contact</div>
              <div className="text-[14px] text-bone/85 space-y-1">
                {COMPANY.phones.map((p) => (
                  <div key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="sweep">{p}</a>
                  </div>
                ))}
                <div>
                  <a href={`mailto:${COMPANY.email}`} className="sweep">{COMPANY.email}</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="eyebrow text-bone/55 mb-4">Sitemap</div>
              <ul className="space-y-2 text-[14px]">
                <li><Link className="sweep text-bone/85" href="/">Home</Link></li>
                {NAV_ITEMS.map((n) => (
                  <li key={n.href}><Link className="sweep text-bone/85" href={n.href}>{n.label}</Link></li>
                ))}
              </ul>
              <div className="eyebrow text-bone/55 mt-8 mb-3">Hours</div>
              <p className="text-[14px] text-bone/85">{COMPANY.hours}</p>
            </div>
          </div>

          <div className="hairline-gold mt-16 mb-8 opacity-50" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Logo invert />
            <p className="text-[12px] text-bone/50 tracking-[0.06em]">
              © {new Date().getFullYear()} {COMPANY.name}. Engineered in {COMPANY.city}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
