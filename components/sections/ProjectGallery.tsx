'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <section className="section-tight bg-bone relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8 border-b border-steel/20 pb-4">
          <div>
            <h2 className="font-display text-2xl text-ink font-semibold">Project Photo Gallery</h2>
            <p className="text-xs text-steel mt-1">Click any photo to enlarge and cycle through full-screen views</p>
          </div>
          <span className="text-xs font-mono font-bold text-ink bg-white px-3.5 py-1.5 rounded-full border border-steel/20 shadow-sm">
            {images.length} High-Res Photos
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <div
              key={src + i}
              onClick={() => setSelectedIndex(i)}
              className={`group relative overflow-hidden rounded-2xl bg-ink border border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                i % 5 === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
              }`}
              data-reveal
              data-reveal-delay={`${(i % 6) * 60}`}
            >
              <Image
                src={src}
                alt={`${projectName} photo ${i + 1}`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />

              {/* Image Number Badge */}
              <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-md text-white font-mono text-[10px] px-2.5 py-1 rounded-md border border-white/15">
                {i + 1} / {images.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal / Fullscreen Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
          onClick={handleClose}
        >
          {/* Close Cross Mark Button (Top Right) */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close Lightbox"
              className="w-12 h-12 rounded-full bg-ink text-white font-extrabold text-xl flex items-center justify-center transition-all duration-300 border border-white/25 shadow-2xl hover:bg-gold hover:text-ink hover:border-gold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Previous Arrow Button (Dark Button) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ink text-white font-extrabold text-3xl flex items-center justify-center transition-all duration-300 border border-white/25 shadow-2xl hover:bg-gold hover:text-ink hover:border-gold cursor-pointer"
          >
            ‹
          </button>

          {/* Main Enlarged Image View - Clicking image advances to Next */}
          <div
            className="relative w-full max-w-5xl h-[80vh] sm:h-[86vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${projectName} enlarged photo ${selectedIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-contain pointer-events-none"
            />
          </div>

          {/* Next Arrow Button (Dark Button) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ink text-white font-extrabold text-3xl flex items-center justify-center transition-all duration-300 border border-white/25 shadow-2xl hover:bg-gold hover:text-ink hover:border-gold cursor-pointer"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
