'use client';

import Icon from '@/assets/Icon';
import { Button } from '@/components/ui/Button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className='absolute top-0 z-50 flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetTitle className='hidden'>
            <VisuallyHidden.Root>x</VisuallyHidden.Root>
          </SheetTitle>
          <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
            <Icon />
            <span className='sr-only'>
              Alejandro Sandí - Front-End & Back-End Developer | Portfolio
            </span>
          </Link>
          <div className='grid gap-2 py-6'>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              About
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Services
            </Link>
            <div>
              <Button variant='outline' asChild>
                <Link href='/#contact'>Let&apos;s talk</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className='left-0 right-0 m-auto flex w-full max-w-default justify-between'>
        <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
          <Icon />
          <span className='sr-only'>
            Alejandro Sandí - Front-End & Back-End Developer | Portfolio
          </span>
        </Link>
        <nav className='ml-auto hidden gap-6 lg:flex'>
          <Button variant='ghost' asChild>
            <Link href='/#home'>Home</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href='/#projects'>Projects</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href='/#about-me'>About Me</Link>
          </Button>
          <div>
            <Button variant='outline' asChild>
              <Link href='/#contact'>Let&apos;s talk</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
