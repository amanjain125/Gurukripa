import type { Metadata } from 'next';
import { Fraunces, Inter, Outfit } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { CustomCursor } from '@/components/providers/CustomCursor';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { LocalBusinessSchema } from '@/components/site/LocalBusinessSchema';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gurukripaconstructions.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gurukripa Constructions — Consultants & Builders, Bengaluru',
    template: '%s · Gurukripa Constructions',
  },
  description:
    'Gurukripa Constructions is a Bengaluru-based civil construction and structural consultancy firm led by Anuj Jain (B.E. Civil, M.Tech Structural). Residential, commercial, and turnkey projects engineered to last.',
  applicationName: 'Gurukripa Constructions',
  keywords: [
    'construction Bengaluru',
    'structural consultant',
    'civil contractor',
    'turnkey construction',
    'residential builder Basavanagudi',
    'Anuj Jain structural',
  ],
  authors: [{ name: 'Anuj Jain' }],
  creator: 'Gurukripa Constructions',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Gurukripa Constructions — Consultants & Builders, Bengaluru',
    description:
      'Civil construction and structural consultancy. Residential, commercial, and turnkey projects engineered to last.',
    siteName: 'Gurukripa Constructions',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Gurukripa Constructions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurukripa Constructions',
    description: 'Consultants & Builders, Bengaluru.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/logo-mark.svg',
    apple: '/logo-mark.svg',
  },
};

export const viewport = {
  themeColor: '#F6F2EC',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${outfit.variable}`}>
      <body className="bg-bone text-ink">
        <LocalBusinessSchema />
        <SmoothScroll>
          <CustomCursor />
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
