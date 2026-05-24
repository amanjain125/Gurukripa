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
    <form onSubmit={onSubmit} className="space-y-8 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field label="Phone" name="phone" required type="tel" placeholder="+91 ..." />
      </div>
      <Field label="Email" name="email" required type="email" placeholder="you@domain.com" />

      <div>
        <label className="field-label block mb-2">Project type</label>
        <select name="projectType" required className="field appearance-none cursor-pointer">
          <option value="">Select one</option>
          <option>Independent residence</option>
          <option>Commercial / mixed-use</option>
          <option>Structural consulting only</option>
          <option>Renovation / retrofit</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="field-label block mb-2">Brief</label>
        <textarea
          name="message"
          required
          rows={5}
          className="field resize-none"
          placeholder="Site, scope, timeline. Anything we should know."
        />
      </div>

      <div className="flex items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'loading' ? 'Sending…' : 'Send to Anuj'}
          <span aria-hidden>→</span>
        </button>
        <p className="text-[12px] text-steel max-w-xs">
          We reply within two working days, on the same channel you wrote in on.
        </p>
      </div>

      {status === 'success' && (
        <p className="text-[14px] text-brand-teal-deep border-l-2 border-brand-teal pl-4 py-2">
          Thank you. We&rsquo;ve received your note and will be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-[14px] text-brand-red-deep border-l-2 border-brand-red pl-4 py-2">
          Couldn&rsquo;t send the message. {error}. Please email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="field-label block mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field"
      />
    </div>
  );
}
