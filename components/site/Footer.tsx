'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { COMPANY, NAV_ITEMS, ADDRESS_SINGLE_LINE } from '@/lib/company';

export function Footer() {
  const pathname = usePathname();
  const primaryPhoneClean = COMPANY.phones[0].replace(/\s/g, '');
  const whatsappUrl = `https://wa.me/${primaryPhoneClean.replace('+', '')}`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_SINGLE_LINE)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const hashIndex = href.indexOf('#');
      const hash = href.substring(hashIndex);
      const targetPath = href.substring(0, hashIndex) || '/';

      if (pathname === targetPath || (pathname === '/' && targetPath === '/')) {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#0B0C0E] text-bone relative overflow-hidden pt-8 pb-4">
      {/* Aurora Gradients */}
      <div
        className="absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,50,43,0.4), transparent 65%)' }}
      />
      <div
        className="absolute -bottom-40 -right-20 w-[60vw] h-[60vw] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(63,169,161,0.35), transparent 65%)' }}
      />

      <div className="container-wide relative z-10">
        {/* TOP CTA BANNER */}
        <div className="glass-dark rounded-xl p-4 sm:p-5 border border-white/10 shadow-lg mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-1">
                {COMPANY.name} &middot; {COMPANY.city}
              </span>
              <h2 className="font-display text-xl sm:text-2xl text-bone leading-snug font-light">
                Ready to build something <em className="font-display-italic text-brand-red font-normal">extraordinary?</em>
              </h2>
              <p className="mt-1 text-bone/70 text-[13px] max-w-xl leading-relaxed">
                Speak directly with Anuj Jain (M.Tech Structural) for construction packages, architecture, &amp; cost-plus contracts.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-2.5 lg:justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-deep text-white font-bold px-4 py-2.5 rounded-lg text-[13px] shadow-sm hover:shadow transition-all text-center"
              >
                Get Free Quote &rarr;
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-bone font-semibold px-4 py-2.5 rounded-lg text-[13px] border border-white/15 backdrop-blur-md transition-all text-center flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 4 COLUMN NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-white/10">
          {/* Column 1: Profile & Credentials */}
          <div className="lg:col-span-4 space-y-2">
            <Logo invert />
            <p className="text-bone/70 text-[13px] leading-relaxed max-w-sm">
              Bengaluru civil construction and structural consultancy firm led by{' '}
              <span className="text-bone font-semibold">{COMPANY.founder.name}</span>{' '}
              <span className="text-bone/50">({COMPANY.founder.credentials})</span>.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11.5px] text-gold font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              14+ Years &middot; 120+ Projects Delivered
            </div>
          </div>

          {/* Column 2: Navigation / Sitemap */}
          <div className="lg:col-span-2 space-y-2">
            <div className="text-[10px] font-bold tracking-[0.2em] text-bone/50 uppercase">
              Navigation
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-bone/75 hover:text-white transition-colors sweep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Solutions */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[10px] font-bold tracking-[0.2em] text-bone/50 uppercase">
              Services
            </div>
            <ul className="space-y-1.5 text-[13px] text-bone/75">
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleAnchorClick(e, '/#services')}
                  className="hover:text-white transition-colors sweep"
                >
                  Construction Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleAnchorClick(e, '/#services')}
                  className="hover:text-white transition-colors sweep"
                >
                  Renovation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office & Direct Contact */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[10px] font-bold tracking-[0.2em] text-bone/50 uppercase">
              Head Office
            </div>
            <address className="not-italic text-bone/80 leading-snug text-[12.5px]">
              {COMPANY.address.line1}<br />
              {COMPANY.address.line2}<br />
              {COMPANY.address.line3}, {COMPANY.address.state} {COMPANY.address.pincode}
            </address>

            <div className="space-y-1 text-[12.5px]">
              {COMPANY.phones.map((p) => (
                <div key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="text-bone hover:text-gold transition-colors font-semibold flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {p}
                  </a>
                </div>
              ))}
              <div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-bone/80 hover:text-gold transition-colors block truncate"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-bold text-gold hover:underline pt-0.5"
            >
              Open in Google Maps &nearr;
            </a>
          </div>
        </div>

        {/* BOTTOM BAR & BACK TO TOP */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] text-bone/50">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>

          <p className="hidden md:block">
            Engineered with precision in {COMPANY.city}, India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-bone/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10 text-[11.5px]"
          >
            <span>Back to top</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
