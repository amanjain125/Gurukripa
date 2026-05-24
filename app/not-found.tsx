import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[80svh] grid place-items-center bg-bone">
      <div className="container-narrow text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-display text-display text-ink">
          Off the <em className="font-display-italic">grid.</em>
        </h1>
        <p className="mt-6 text-ink/70 max-w-md mx-auto leading-body">
          The page you were looking for isn&rsquo;t here. Let us walk you back to the studio.
        </p>
        <Link href="/" className="btn btn-primary mt-10 inline-flex">
          Take me home <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
