'use client';

import cn from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-button hover:before:bg-gradient-button before:transition-filter relative z-10 bg-[length:300px_100px] bg-repeat text-primary-foreground before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:m-auto before:h-3/5 before:w-4/5 animate-glowing before:bg-[length:300px_100px] before:bg-repeat before:duration-700 before:content-[""] hover:before:blur-lg',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'after:bg-gradient-button after:transition-filter after:content-[""] before:bg-gradient-button relative animate-glowing bg-background text-primary-foreground before:absolute before:-bottom-px before:-left-px before:-right-px before:-top-px before:-z-10 before:animate-glowing before:rounded-md before:bg-[length:300px_100px] before:bg-repeat before:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:m-auto after:h-3/5 after:w-4/5 after:animate-glowing after:bg-[length:300px_100px] after:bg-repeat after:duration-700 hover:after:blur-lg',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
