'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './Button';

type SubmitButtonProps = {
  children: ReactNode;
};

function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' aria-disabled={pending}>
      {pending ? (
        <div className='ldrs-ring-container ldrs-ring-sm' />
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
