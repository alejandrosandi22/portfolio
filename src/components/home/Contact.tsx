'use client';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import SubmitButton from '@/components/ui/SubmitButton';
import { Textarea } from '@/components/ui/Textarea';
import { Toaster } from '@/components/ui/Toaster';
import sendEmail from '@/services/send-email';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { startTransition, useActionState, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

const INITIAL_STATE: ApiResponse = { error: null, success: null };

type FieldErrors = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(form: HTMLFormElement): FieldErrors {
  const errors: FieldErrors = {};
  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '';
  const email = (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '';
  const reason = (form.elements.namedItem('reason') as HTMLInputElement)?.value ?? '';
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '';

  if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (reason.trim().length < 3) errors.reason = 'Reason must be at least 3 characters.';
  if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

// In development, use Cloudflare's always-pass test key (accepts any hostname).
// In production, the real site key is used.
const TURNSTILE_SITE_KEY =
  process.env.NODE_ENV === 'development'
    ? '1x00000000000000000000AA'
    : (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA');

function Contact() {
  const [status, dispatch, isPending] = useActionState(sendEmail, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const { success, error } = status;

  useEffect(() => {
    if (success != null) {
      toast.success(success.message);
      formRef.current?.reset();
      setFieldErrors({});
      turnstileRef.current?.reset();
    }
  }, [success]);

  useEffect(() => {
    if (error != null) {
      toast.error(error.message);
      turnstileRef.current?.reset();
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateFields(e.currentTarget);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstKey = Object.keys(errors)[0] as keyof FieldErrors;
      (e.currentTarget.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }

    setFieldErrors({});
    startTransition(() => dispatch(new FormData(e.currentTarget)));
  };

  return (
    <section id='contact' className='my-24'>
      <div className='mb-16 flex w-full flex-col items-center'>
        <span className='mb-2 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text font-migra text-base font-medium text-transparent'>
          Contact
        </span>
        <h2 className='w-full text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
          Get in Touch
        </h2>
      </div>
      <Toaster position='top-center' expand={false} />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        aria-label='Contact form'
        className='left-0 right-0 m-auto max-w-sm px-5 lg:px-0'
      >
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            required
            autoComplete='name'
            aria-required='true'
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id='name-error' role='alert' className='text-sm text-red-500'>
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
            autoComplete='email'
            aria-required='true'
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id='email-error' role='alert' className='text-sm text-red-500'>
              {fieldErrors.email}
            </p>
          )}
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='reason'>Reason</Label>
          <Input
            type='text'
            id='reason'
            name='reason'
            placeholder='Tell me about it'
            required
            aria-required='true'
            aria-invalid={fieldErrors.reason ? true : undefined}
            aria-describedby={fieldErrors.reason ? 'reason-error' : undefined}
          />
          {fieldErrors.reason && (
            <p id='reason-error' role='alert' className='text-sm text-red-500'>
              {fieldErrors.reason}
            </p>
          )}
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Leave a message'
            required
            aria-required='true'
            aria-invalid={fieldErrors.message ? true : undefined}
            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          />
          {fieldErrors.message && (
            <p id='message-error' role='alert' className='text-sm text-red-500'>
              {fieldErrors.message}
            </p>
          )}
        </div>
        <div className='mb-5'>
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onError={() => toast.error('Security check failed. Please refresh and try again.')}
          />
        </div>
        <SubmitButton pending={isPending}>Send Message</SubmitButton>
      </form>
    </section>
  );
}

export default Contact;
