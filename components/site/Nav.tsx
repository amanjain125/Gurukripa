'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV_ITEMS } from '@/lib/company';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-4 inset-x-4 z-50 transition-all duration-500 ease-out">
      <div
        className={`mx-auto max-w-[1440px] transition-all duration-500 ${
          scrolled ? 'glass-strong rounded-full' : 'glass rounded-full'
        }`}
      >
        <div className="flex items-center justify-between h-[64px] px-5 md:px-7">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] tracking-[0.06em] sweep ${active ? 'text-ink' : 'text-ink/65 hover:text-ink'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary !py-2.5 !px-4 text-[12px]">
              Talk to Anuj
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-ink transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-2 overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="glass-strong rounded-3xl p-7 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="font-display text-2xl text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary mt-4 self-start">
            Talk to Anuj <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
