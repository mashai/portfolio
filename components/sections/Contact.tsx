'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const { cta, fields, validation, submit, success, error: errorMsg } = siteContent.contact;

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const inputClass =
  'w-full rounded border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder-text-muted/60 focus:border-text focus:outline-none';
const labelClass = 'block text-sm text-text-muted';
const fieldClass = 'flex flex-col gap-1.5';

function extractAndValidate(form: HTMLFormElement): { values: FormValues; errors: FormErrors } {
  const data = new FormData(form);
  const values: FormValues = {
    name: (data.get('name') as string).trim(),
    email: (data.get('email') as string).trim(),
    company: (data.get('company') as string).trim(),
    website: (data.get('website') as string).trim(),
    message: (data.get('message') as string).trim(),
  };
  const errors: FormErrors = {};
  if (!values.name) errors.name = validation.nameRequired;
  if (!values.email) errors.email = validation.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = validation.emailInvalid;
  if (!values.message) errors.message = validation.messageRequired;
  return { values, errors };
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const { values, errors: next } = extractAndValidate(e.currentTarget);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
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
                    <div className="flex items-baseline gap-2">
                      <label htmlFor="name" className={labelClass}>{fields.name}</label>
                      {errors.name && <span className="text-xs text-text-muted">{errors.name}</span>}
                    </div>
                    <input id="name" name="name" type="text" className={inputClass} />
                  </div>
                  <div className={fieldClass}>
                    <label htmlFor="company" className={labelClass}>{fields.company}</label>
                    <input id="company" name="company" type="text" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className={fieldClass}>
                    <div className="flex items-baseline gap-2">
                      <label htmlFor="email" className={labelClass}>{fields.email}</label>
                      {errors.email && <span className="text-xs text-text-muted">{errors.email}</span>}
                    </div>
                    <input id="email" name="email" type="email" className={inputClass} />
                  </div>
                  <div className={fieldClass}>
                    <label htmlFor="website" className={labelClass}>{fields.website}</label>
                    <input id="website" name="website" type="url" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <label htmlFor="message" className={labelClass}>{fields.message}</label>
                    {errors.message && <span className="text-xs text-text-muted">{errors.message}</span>}
                  </div>
                  {status === 'error'
                    ? <p className="text-sm text-text-muted self-end">{errorMsg}</p>
                    : <div />
                  }
                  <textarea id="message" name="message" rows={2} className={inputClass} />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="rounded border border-text-muted px-6 text-sm font-medium text-text-muted transition-opacity hover:opacity-70 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending…' : submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
