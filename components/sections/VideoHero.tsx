'use client';

import { useRef } from 'react';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full overflow-hidden bg-ink pt-20">
      <div className="relative w-full aspect-video md:min-h-[85vh] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/homevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
