import { ReactNode } from 'react';

interface ResourcesProps {
  resources: ReactNode;
}

function Resources({ resources }: ResourcesProps) {
  return (
    <section className='left-0 right-0 m-auto mb-24 mt-24 max-w-default px-5 lg:px-0'>
      <div className='mb-16 w-full'>
        <h2 className='w-full text-3xl font-medium md:text-4xl lg:text-5xl'>
          User Experience Showcase
        </h2>
      </div>
      <div>{resources}</div>
    </section>
  );
}

export default Resources;
