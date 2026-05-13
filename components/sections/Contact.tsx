'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const { cta, fields, submit, success, error: errorMsg } = siteContent.contact;

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder-text-muted/60 focus:border-text focus:outline-none';
const labelClass = 'block text-sm text-text-muted';
const fieldClass = 'flex flex-col gap-1.5';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const message = (data.get('message') as string).trim();
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name) next.name = 'Name is required';
    if (!email) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address';
    if (!message) next.message = 'Message is required';
    return next;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus('loading');
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (data.get('name') as string).trim(),
          email: (data.get('email') as string).trim(),
          company: (data.get('company') as string).trim(),
          website: (data.get('website') as string).trim(),
          message: (data.get('message') as string).trim(),
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contact" className="bg-surface-muted">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-2xl font-medium text-text">{cta}</p>
          </div>
          <div>
            {status === 'success' ? (
              <p className="text-base text-text">{success}</p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className={fieldClass}>
                    <label htmlFor="name" className={labelClass}>{fields.name}</label>
                    <input id="name" name="name" type="text" className={inputClass} />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                  </div>
                  <div className={fieldClass}>
                    <label htmlFor="company" className={labelClass}>{fields.company}</label>
                    <input id="company" name="company" type="text" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className={fieldClass}>
                    <label htmlFor="email" className={labelClass}>{fields.email}</label>
                    <input id="email" name="email" type="email" className={inputClass} />
                    {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                  </div>
                  <div className={fieldClass}>
                    <label htmlFor="website" className={labelClass}>{fields.website}</label>
                    <input id="website" name="website" type="url" className={inputClass} />
                  </div>
                </div>
                <div className={fieldClass}>
                  <label htmlFor="message" className={labelClass}>{fields.message}</label>
                  <textarea id="message" name="message" rows={2} className={inputClass} />
                  {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                </div>
                {status === 'error' && <p className="text-sm text-red-500">{errorMsg}</p>}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="rounded bg-text px-6 py-2.5 text-sm font-medium text-surface transition-opacity hover:opacity-70 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending…' : submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
