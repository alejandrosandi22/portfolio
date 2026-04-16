'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './Button';

type SubmitButtonProps = {
  children: ReactNode;
  pending?: boolean;
};

function SubmitButton({ children, pending: pendingProp }: SubmitButtonProps) {
  const { pending: formPending } = useFormStatus();
  const pending = pendingProp !== undefined ? pendingProp : formPending;

  return (
    <Button type='submit' disabled={pending} aria-busy={pending}>
      {pending ? (
        <>
          <div className='ldrs-ring-container ldrs-ring-sm' aria-hidden='true' />
          <span className='sr-only'>Sending message…</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
