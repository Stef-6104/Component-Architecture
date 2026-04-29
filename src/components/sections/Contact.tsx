'use client';

import { useId, useMemo, useState } from 'react';

type ContactErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const formId = useId();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<ContactErrors>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactEmail = 'ronnmanallo787@gmail.com';

  const isValid = useMemo(() => {
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      emailRegex.test(email.trim()) &&
      message.trim().length > 0
    );
  }, [email, firstName, lastName, message]);

  function validate(): ContactErrors {
    const next: ContactErrors = {};

    if (!firstName.trim()) next.firstName = 'First name is required.';
    if (!lastName.trim()) next.lastName = 'Last name is required.';

    const emailValue = email.trim();
    if (!emailValue) next.email = 'Email is required.';
    else if (!emailRegex.test(emailValue)) next.email = 'Enter a valid email.';

    if (!message.trim()) next.message = 'Message is required.';

    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // Simulation only (no real API call).
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-wide text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-200/90 sm:text-lg">
              I&apos;d love to talk with you
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-200/90 sm:text-base">
              If you have any inquiries or just want to say hi, please feel
              free to use the contact form!
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="text-zinc-200/90">
                Email:{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-white underline underline-offset-4 hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="text-zinc-200/90">
                Social:{' '}
                <span className="text-white/80">
                  <a
                    className="font-semibold hover:text-white underline underline-offset-4"
                    href="https://github.com/Stef-6104"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {', '}
                  <a
                    className="font-semibold hover:text-white underline underline-offset-4"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  {', '}
                  <a
                    className="font-semibold hover:text-white underline underline-offset-4"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter / X
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div>
            {success ? (
              <div
                role="status"
                className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-100"
              >
                Thanks! Your message has been sent (simulated).
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${formId}-firstName`}
                    className="text-sm font-semibold text-white/90"
                  >
                    First Name
                  </label>
                  <input
                    id={`${formId}-firstName`}
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? `${formId}-firstName-error` : undefined
                    }
                  />
                  {errors.firstName ? (
                    <p
                      id={`${formId}-firstName-error`}
                      className="mt-2 text-xs text-rose-300"
                    >
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-lastName`}
                    className="text-sm font-semibold text-white/90"
                  >
                    Last Name
                  </label>
                  <input
                    id={`${formId}-lastName`}
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={
                      errors.lastName ? `${formId}-lastName-error` : undefined
                    }
                  />
                  {errors.lastName ? (
                    <p
                      id={`${formId}-lastName-error`}
                      className="mt-2 text-xs text-rose-300"
                    >
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${formId}-email`}
                  className="text-sm font-semibold text-white/90"
                >
                  Email <span className="text-rose-300">*</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                {errors.email ? (
                  <p
                    id={`${formId}-email-error`}
                    className="mt-2 text-xs text-rose-300"
                  >
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor={`${formId}-message`}
                  className="text-sm font-semibold text-white/90"
                >
                  Message
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? `${formId}-message-error` : undefined
                  }
                />
                {errors.message ? (
                  <p
                    id={`${formId}-message-error`}
                    className="mt-2 text-xs text-rose-300"
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

