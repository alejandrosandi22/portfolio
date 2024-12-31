'use server';

import { SERVER_BASE_API } from '@/utils/constants';

async function sendEmail(
  prevState: ApiResponse,
  formData: FormData,
): Promise<ApiResponse> {
  try {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('reason'),
      message: formData.get('message'),
    };

    const response = await fetch(`${SERVER_BASE_API}/contact`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok)
      return {
        success: null,
        error: {
          message: data.message,
        },
      };

    return {
      success: {
        message: 'Email sent successfully',
      },
      error: null,
    };
  } catch (e) {
    console.error(e);
    return {
      success: null,
      error: {
        message: 'An unexpected error occurred.',
      },
    };
  }
}

export default sendEmail;
