'use client';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import SubmitButton from '@/components/ui/SubmitButton';
import { Textarea } from '@/components/ui/Textarea';
import { Toaster } from '@/components/ui/Toaster';
import sendEmail from '@/services/send-email';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

const INITIAL_STATE = { error: null, success: null };

function Contact() {
  const [status, dispatch] = useActionState(sendEmail, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement | null>(null);

  const { success, error } = status;

  useEffect(() => {
    if (success != null) {
      toast.success(success.message);
    }
  }, [success]);

  useEffect(() => {
    if (error != null) {
      toast.error(error.message);
    }
  }, [error]);

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
        action={dispatch}
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
          />
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='reason'>Reason</Label>
          <Input
            type='text'
            id='reason'
            name='reason'
            placeholder='Tell me about it'
            required
          />
        </div>
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Leave a message'
            required
          />
        </div>
        <SubmitButton>Send Message</SubmitButton>
      </form>
    </section>
  );
}

export default Contact;
