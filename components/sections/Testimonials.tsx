'use client';

import { useState, useEffect } from 'react';
import { TESTIMONIALS, Testimonial } from '@/lib/testimonials';

export function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // Load persisted user reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gurukripa_client_reviews');
      if (saved) {
        const parsed: Testimonial[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...TESTIMONIALS]);
        }
      }
    } catch {
      // fallback to initial
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !quote.trim()) return;

    const newReview: Testimonial = {
      author: author.trim(),
      role: role.trim() || 'Client',
      quote: quote.trim(),
      rating: rating,
      date: 'Just now',
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);

    // Save user added reviews to localStorage
    try {
      const existingSaved = localStorage.getItem('gurukripa_client_reviews');
      const userAdded = existingSaved ? JSON.parse(existingSaved) : [];
      localStorage.setItem(
        'gurukripa_client_reviews',
        JSON.stringify([newReview, ...userAdded])
      );
    } catch {
      // fallback
    }

    // Reset form & show toast
    setAuthor('');
    setRole('');
    setQuote('');
    setRating(5);
    setIsModalOpen(false);
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 5000);
  };

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="section-tight relative overflow-hidden bg-bone border-t border-ink/5">
      <div className="aurora aurora-soft" />

      {/* Header Container */}
      <div className="container-wide relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="eyebrow" data-reveal>
            Client Endorsements & Real Reviews
          </p>
          <h2
            className="font-display text-h1 text-ink mt-3 max-w-2xl"
            data-reveal
            data-reveal-delay="80"
          >
            Built once.{' '}
            <em className="font-display-italic text-brand-red">Vouched for</em>{' '}
            for years.
          </h2>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary self-start md:self-auto px-6 py-3.5 text-sm shadow-lg hover:scale-105 transition-all"
        >
          <svg
            className="w-4 h-4 text-gold fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Write a Review
        </button>
      </div>

      {/* Success Notification Toast */}
      {submittedSuccess && (
        <div className="container-wide mb-6">
          <div className="p-4 rounded-xl bg-brand-teal/15 border border-brand-teal/30 text-brand-teal-deep text-sm font-medium flex items-center justify-between">
            <span>
              🎉 Thank you! Your review has been added and is now live in the rotating showcase below.
            </span>
            <button
              onClick={() => setSubmittedSuccess(false)}
              className="text-brand-teal-deep hover:text-ink font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Infinite Marquee Track */}
      <div className="relative z-10">
        <div className="flex gap-6 marquee-track w-max hover:[animation-play-state:paused] cursor-pointer">
          {marqueeItems.map((t, i) => (
            <article
              key={`${t.author}-${i}`}
              className="w-[340px] md:w-[420px] shrink-0 glass-strong rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.02] shadow-sm"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    className="w-4 h-4 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-display text-lg leading-snug text-ink min-h-[72px]">
                <em className="font-display-italic text-brand-red">&ldquo;</em>
                {t.quote}
                <em className="font-display-italic text-brand-red">&rdquo;</em>
              </p>

              {/* Author Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-red text-bone font-bold text-xs flex items-center justify-center shadow-inner">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-ink">
                      {t.author}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-steel">
                      {t.role}
                    </p>
                  </div>
                </div>

                {t.date && (
                  <span className="text-[10px] text-steel/70 font-mono">
                    {t.date}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg glass-strong rounded-3xl p-8 shadow-2xl border border-white/60">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-steel hover:text-ink text-xl font-bold p-1"
              aria-label="Close review modal"
            >
              ✕
            </button>

            <div className="mb-6">
              <p className="eyebrow text-brand-red">Share Your Experience</p>
              <h3 className="font-display text-2xl text-ink mt-1">
                Write a Client Review
              </h3>
              <p className="text-xs text-steel mt-1">
                Your feedback helps us continuously elevate our construction standard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="field-label mb-1.5 block">Your Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-125"
                    >
                      <svg
                        className={`w-7 h-7 ${
                          star <= (hoverRating || rating)
                            ? 'text-gold fill-current'
                            : 'text-gray-300 fill-current'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-ink ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="field-label mb-1.5 block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sridhar Murthy"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="field"
                />
              </div>

              <div>
                <label className="field-label mb-1.5 block">
                  Project or Title (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Owner, Sadashivanagar Villa"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="field"
                />
              </div>

              <div>
                <label className="field-label mb-1.5 block">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share your experience working with Gurukripa Constructions..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="field resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-steel hover:text-ink"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary px-6 py-2.5">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
