'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function CareersForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');
    setError(null);

    // Mocking an API call
    setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 1500);
  }

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

      {/* Job Role Dropdown */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="jobRole">
          Applying For <span className="text-brand-red">*</span>
        </label>
        <div className="relative">
          <select
            id="jobRole"
            name="jobRole"
            required
            className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3.5 pr-10 text-[16px] text-ink outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition cursor-pointer appearance-none"
          >
            <option value="">Select a position</option>
            <option value="Site Engineer / Supervisor">Site Engineer / Supervisor</option>
            <option value="Architects">Architects</option>
            <option value="QAD, Quantity Surveyor">QAD, Quantity Surveyor</option>
            <option value="Interior Designer">Interior Designer</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Resume File Upload */}
      <div>
        <label className="block text-[15px] font-semibold text-ink/90 mb-2" htmlFor="resume">
          Upload Resume <span className="text-brand-red">*</span>
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="w-full bg-white/90 border border-ink/15 rounded-xl px-4 py-3 text-[15px] text-ink/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[14px] file:font-semibold file:bg-brand-red/10 file:text-brand-red hover:file:bg-brand-red/20 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 transition"
        />
        <p className="text-[13px] text-ink/60 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand-red hover:bg-brand-red-deep text-white font-extrabold py-4 px-6 rounded-xl text-[17px] tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Application'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-[15px] text-brand-teal-deep bg-brand-teal/10 border border-brand-teal/30 rounded-xl p-3.5 text-center font-medium animate-fadeIn">
          Thank you! Your application has been submitted successfully.
        </p>
      )}
      {status === 'error' && (
        <p className="text-[15px] text-brand-red bg-brand-red/10 border border-brand-red/30 rounded-xl p-3.5 text-center font-medium animate-fadeIn">
          Couldn&rsquo;t submit: {error}.
        </p>
      )}
    </form>
  );
}
