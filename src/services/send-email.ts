'use server';

import { SERVER_BASE_API } from '@/utils/constants';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyCaptcha(token: string): Promise<boolean> {
  if (process.env.NODE_ENV === 'development') return true;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    },
  );
  const data = await res.json();
  return data.success === true;
}

function validateInput(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string | null {
  if (!data.name.trim() || data.name.trim().length < 2)
    return 'Name must be at least 2 characters.';
  if (!EMAIL_RE.test(data.email.trim()))
    return 'Please enter a valid email address.';
  if (!data.subject.trim() || data.subject.trim().length < 3)
    return 'Reason must be at least 3 characters.';
  if (!data.message.trim() || data.message.trim().length < 10)
    return 'Message must be at least 10 characters.';
  return null;
}

async function sendEmail(
  _prevState: ApiResponse,
  formData: FormData,
): Promise<ApiResponse> {
  try {
    const captchaToken = formData.get('cf-turnstile-response') as string;
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return {
        success: null,
        error: { message: 'CAPTCHA verification failed. Please try again.' },
      };
    }

    const rawFormData = {
      name: (formData.get('name') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      subject: (formData.get('reason') as string) ?? '',
      message: (formData.get('message') as string) ?? '',
    };

    const validationError = validateInput(rawFormData);
    if (validationError) {
      return { success: null, error: { message: validationError } };
    }

    const response = await fetch(`${SERVER_BASE_API}/contact`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (!response.ok) {
      return { success: null, error: { message: data.message } };
    }

    return { success: { message: 'Email sent successfully' }, error: null };
  } catch (e) {
    console.error(e);
    return {
      success: null,
      error: { message: 'An unexpected error occurred.' },
    };
  }
}

export default sendEmail;
