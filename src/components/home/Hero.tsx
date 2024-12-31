import Background from '@/assets/Background';
import Skills from '@/components/home/Skills';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function Hero() {
  return (
    <section
      id='home'
      className='relative box-border w-full overflow-hidden px-5 pb-20 pt-40 md:pt-48'
    >
      <div className='absolute -top-28 left-0 right-0 z-0 mx-auto'>
        <Background />
      </div>
      <div className='relative z-10 flex flex-col items-center gap-4 text-foreground lg:gap-8'>
        <h2 className='text-center font-migra text-xl md:text-2xl lg:text-3xl'>
          Hi, I&apos;m Alejandro Sandí
        </h2>
        <h1 className='text-center font-helvetica text-4xl font-extrabold text-primary-foreground md:text-5xl lg:text-7xl'>
          Front-End & Back-End Developer
        </h1>
        <h2 className='max-w-4xl text-center font-migra text-xl text-foreground md:text-2xl lg:text-3xl'>
          Experienced Web Developer with a proven track record of delivering
          high-quality, results-oriented projects.
        </h2>
      </div>
      <div className='relative z-10 mt-16 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10'>
        <Button asChild>
          <Link href='#projects'>Discover My Work</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='#contact'>Collaborate with Me</Link>
        </Button>
      </div>
      <div className='mt-20 flex w-full items-center justify-center md:mt-32'>
        <Skills />
      </div>
    </section>
  );
}

export default Hero;
