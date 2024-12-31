import cn from '@/utils/cn';
import { ReactNode } from 'react';

type MaxWidthWrapperProps = {
  className?: string;
  children: ReactNode;
};

function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
