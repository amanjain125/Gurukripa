import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Journal — Notes from the field',
  description:
    'Short essays from Anuj Jain on structural design, site discipline, and the practice of building well.',
};

const POSTS = [
  {
    slug: 'reading-a-soil-report',
    title: 'How we read a soil report before quoting a foundation.',
    eyebrow: 'Foundations',
    excerpt:
      'A soil report is not a price-anchor. It is a small book about how a site behaves. Here is what we look at first.',
    date: 'May 2026',
  },
  {
    slug: 'why-we-still-pour-by-hand',
    title: 'Why we still pour the first slab by hand.',
    eyebrow: 'Site discipline',
    excerpt:
      'Ready-mix is a wonderful default. But the first slab on a residence is a teaching moment for the rest of the build.',
    date: 'Mar 2026',
  },
  {
    slug: 'the-honest-boq',
    title: 'The honest BOQ: how we price what we don’t yet know.',
    eyebrow: 'Estimating',
    excerpt:
      'A line-item BOQ is a story about future decisions. Here is how we keep ours from drifting.',
    date: 'Jan 2026',
  },
  {
    slug: 'frp-on-a-heritage-beam',
    title: 'Wrapping a 1940s beam in carbon fibre.',
    eyebrow: 'Retrofit',
    excerpt:
      'Notes from a quiet morning in Malleshwaram, where a tension face needed help and the roof tiles couldn’t move.',
    date: 'Nov 2025',
  },
];

export default function JournalPage() {
  return (
    <>
      <RevealOnScroll />
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <p className="eyebrow mb-6" data-reveal>Journal</p>
          <h1 className="font-display text-display text-ink" data-reveal data-reveal-delay="80">
            Notes from <em className="font-display-italic text-brand-red">the field.</em>
          </h1>
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft aurora-warm" />
        <div className="container-narrow relative z-10 space-y-5">
          {POSTS.map((p, i) => (
            <Link
              key={p.slug}
              href="/journal"
              className="block glass rounded-3xl p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 ease-out group"
              data-reveal
              data-reveal-delay={`${i * 60}`}
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-2 text-[10px] tracking-[0.22em] uppercase text-steel">
                  {p.date}
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-brand-teal-deep mb-3">
                    {p.eyebrow}
                  </p>
                  <h2 className="font-display text-h2 text-ink leading-tight sweep inline">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-ink/75 max-w-xl leading-body text-[15px]">{p.excerpt}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <span className="text-[12px] text-brand-red sweep">Read note →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
