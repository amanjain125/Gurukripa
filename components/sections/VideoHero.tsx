'use client';

export function VideoHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black">
      <video
        src="/homevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
}
