'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedSubService, setSelectedSubService] = useState<string>('');

  const subServiceMap: Record<string, { title: string; options: { label: string; value: string }[] }> = {
    Consulting: {
      title: 'Select Consulting Type',
      options: [
        { label: 'Architecture + Structural', value: 'Architecture + Structural' },
        { label: 'Structural', value: 'Structural' },
      ],
    },
    Construction: {
      title: 'Select Construction Type',
      options: [
        { label: 'Commercial', value: 'Commercial' },
        { label: 'Residential', value: 'Residential' },
      ],
    },
    Renovation: {
      title: 'Select Renovation Type',
      options: [
        { label: 'Commercial', value: 'Commercial' },
        { label: 'Residential', value: 'Residential' },
      ],
    },
  };

  function handleServiceChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedService(e.target.value);
    setSelectedSubService('');
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Combine service and sub-service into projectType for backend compatibility
    const combinedProjectType = selectedSubService
      ? `${selectedService} — ${selectedSubService}`
      : selectedService;
    data.projectType = combinedProjectType;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      e.currentTarget.reset();
      setSelectedService('');
      setSelectedSubService('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const currentSubServices = selectedService ? subServiceMap[selectedService] : null;

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      {/* Name */}
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
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      {/* Phone */}
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
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="email">
          Email ID <span className="text-brand-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="e.g. rahul@example.com"
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      {/* Primary Service Dropdown */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="service">
          Select Service <span className="text-brand-red">*</span>
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={handleServiceChange}
            required
            className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 pr-10 text-[16px] text-ink outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition cursor-pointer appearance-none"
          >
            <option value="">Choose your project type</option>
            <option value="Consulting">Consulting</option>
            <option value="Construction">Construction</option>
            <option value="Renovation">Renovation</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Dynamic Sub-Service Dropdown */}
      {currentSubServices && (
        <div className="animate-fadeIn">
          <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="subService">
            {currentSubServices.title} <span className="text-brand-red">*</span>
          </label>
          <div className="relative">
            <select
              id="subService"
              name="subService"
              value={selectedSubService}
              onChange={(e) => setSelectedSubService(e.target.value)}
              required
              className="w-full bg-white/90 border border-brand-red/40 rounded-xl px-4 py-3.5 pr-10 text-[16px] text-ink outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition cursor-pointer appearance-none"
            >
              <option value="">Choose an option</option>
              {currentSubServices.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-red">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Plot Size */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="plotSize">
          Plot Size / Dimensions <span className="text-ink/40">(Optional)</span>
        </label>
        <input
          id="plotSize"
          name="plotSize"
          type="text"
          placeholder="e.g. 30x40 ft, 1200 sq ft, 40x60 ft"
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="message">
          Project Brief / Plot Details <span className="text-ink/40">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Share plot dimension, location, expected timeline or budget..."
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 text-[16px] text-ink placeholder:text-ink/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition resize-none"
        />
      </div>

      {/* Submit Button */}
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
          <svg className="w-4 h-4 text-brand-teal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Response within 24 hours
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-brand-teal-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
