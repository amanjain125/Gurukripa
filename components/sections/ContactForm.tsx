'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="name">
          Your Name <span className="text-brand-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Rahul Sharma"
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4.5 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="phone">
          Mobile Number <span className="text-brand-red">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="10-digit mobile"
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4.5 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="projectType">
          Select Service <span className="text-brand-red">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4.5 py-3.5 text-[16px] text-ink outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition cursor-pointer appearance-none"
        >
          <option value="">Choose your project type</option>
          <option value="Independent Residence">Independent Residence / Villa</option>
          <option value="Commercial / Mixed-use">Commercial / Mixed-use Building</option>
          <option value="Structural Consulting">Structural Consulting & Design</option>
          <option value="Renovation / Retrofit">Renovation & Structural Retrofit</option>
          <option value="Cost-Plus Contract">Cost-Plus / Lump-Sum Contract</option>
        </select>
      </div>

      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="message">
          Project Brief / Plot Details <span className="text-ink/40">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Share plot dimension, location, expected timeline or budget..."
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4.5 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand-red hover:bg-brand-red-deep text-white font-extrabold py-4 px-6 rounded-xl text-[17px] tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'loading' ? 'Submitting…' : 'Get Free Consultation'}
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-medium text-ink/75 pt-1">
        <span className="flex items-center gap-1.5">
          <svg className="w-4.5 h-4.5 text-brand-teal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Response within 24 hours
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4.5 h-4.5 text-brand-teal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          No spam · No obligation
        </span>
      </div>

      {status === 'success' && (
        <p className="text-[15px] text-brand-teal-deep bg-brand-teal/10 border border-brand-teal/30 rounded-xl p-3.5 text-center font-medium">
          Thank you! Your request has been received. Our team will contact you within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="text-[15px] text-brand-red bg-brand-red/10 border border-brand-red/30 rounded-xl p-3.5 text-center font-medium">
          Couldn&rsquo;t submit: {error}. Please call or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
