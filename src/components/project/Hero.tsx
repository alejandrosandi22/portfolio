import Information from '@/components/project/Information';
import cn from '@/utils/cn';
import { Roboto } from 'next/font/google';
import { JSX } from 'react';

const inter = Roboto({
  weight: ['900'],
  style: 'normal',
});

type HeroProps = {
  title: string;
  description: string;
  video: string;
  technologies: Array<(props: IconProps) => JSX.Element>;
  website?: string;
  repository?: string;
  endDate: Date;
};

function Hero({
  title,
  description,
  video,
  endDate,
  website,
  repository,
  technologies,
}: HeroProps) {
  return (
    <section className='mb-24 mt-48 w-full'>
      <div className='left-0 right-0 m-auto flex w-full max-w-default flex-col items-center justify-center px-5'>
        <h1
          className={cn(
            'font-arial mb-2 text-center text-5xl font-extrabold text-primary-foreground md:text-6xl lg:text-7xl',
            inter.className,
          )}
        >
          {title}
        </h1>
        <h5 className='max-w-4xl text-center font-migra text-lg text-foreground md:text-xl lg:text-2xl'>
          {description}
        </h5>
      </div>
      <Information
        technologies={technologies}
        endDate={endDate}
        website={website}
        repository={repository}
      />
      <div>
        <div className='mx-auto max-w-default px-4'>
          <div className='mt-8 flow-root'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 shadow-md ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-gray-400/5'>
              <iframe
                src={video}
                title='ImageKit video player'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
                className='aspect-video w-full overflow-hidden rounded-md bg-secondary shadow-2xl ring-1 ring-gray-900/10'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
