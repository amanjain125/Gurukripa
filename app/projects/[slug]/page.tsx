import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.location}`,
    description: p.summary,
    openGraph: { images: [{ url: p.hero, width: 1600, height: 900, alt: p.name }] },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <RevealOnScroll />

      <section className="relative h-[78svh] min-h-[520px] w-full overflow-hidden bg-bone">
        <Image
          src={p.hero}
          alt={p.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-bone/30" />
        <div className="container-wide relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 text-bone">
          <div className="glass-pill px-4 py-2 rounded-full inline-flex items-center gap-3 self-start text-[10px] tracking-[0.22em] uppercase mb-6 text-bone/85">
            <span>{p.category}</span>
            <span className="h-px w-5 bg-gold" />
            <span>{p.status}</span>
            <span className="h-px w-5 bg-gold" />
            <span>{p.year}</span>
          </div>
          <h1
            className="font-display text-display max-w-5xl leading-[0.95]"
            data-reveal
            data-reveal-delay="80"
          >
            {p.name}
          </h1>
          <p className="mt-6 text-bone/80 max-w-xl text-[15px] leading-body" data-reveal data-reveal-delay="160">
            {p.summary}
          </p>
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <div className="glass-strong rounded-3xl px-8 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {[
              ['Location', p.location],
              ['Built area', p.area],
              ['Year', p.year],
              ['Structural system', p.system],
            ].map(([k, v]) => (
              <div key={k} data-reveal>
                <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-2">{k}</div>
                <div className="font-display text-xl text-ink leading-tight">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft aurora-warm" />
        <div className="container-narrow relative z-10 space-y-6">
          {[
            ['Problem', p.problem, '01'],
            ['Solution', p.solution, '02'],
            ['Outcome', p.outcome, '03'],
          ].map(([title, body, n], i) => (
            <div
              key={String(title)}
              className="glass rounded-3xl p-8 md:p-10 grid grid-cols-12 gap-6"
              data-reveal
              data-reveal-delay={`${i * 80}`}
            >
              <div className="col-span-12 md:col-span-3">
                <span className="text-gold font-display text-2xl">{n}</span>
                <h2 className="font-display text-h2 text-ink mt-1">{title}</h2>
              </div>
              <p className="col-span-12 md:col-span-9 text-[16px] leading-body text-ink/80">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {p.gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl glass-strong ${i === 0 ? 'md:col-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/9' : '4/5' }}
                data-reveal
                data-reveal-delay={`${i * 60}`}
              >
                <Image src={src} alt={`${p.name} gallery ${i + 1}`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-ink text-bone relative overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full opacity-25 blur-3xl pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(192,50,43,0.5), transparent 65%)' }} />
        <div className="container-wide relative z-10">
          <p className="eyebrow text-bone/55 mb-4">Next project</p>
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-h1 text-bone leading-tight sweep inline-block">{next.name}</h2>
              <p className="text-bone/60 mt-2 text-[13px] tracking-[0.16em] uppercase">{next.location}</p>
            </div>
            <span className="font-display-italic text-gold text-3xl">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
