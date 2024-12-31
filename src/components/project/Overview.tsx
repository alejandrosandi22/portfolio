type OverviewProps = {
  content: string[];
  mainObjective: string;
};

function Overview({ content, mainObjective }: OverviewProps) {
  return (
    <section className='left-0 right-0 m-auto max-w-default'>
      <div className='mb-8 w-full px-5 md:mb-16 lg:px-0'>
        <h2 className='w-full text-3xl font-medium md:text-4xl lg:text-5xl'>
          Overview
        </h2>
      </div>
      <div className='flex w-full flex-col px-5 md:flex-row md:gap-8 lg:px-0'>
        {content.map((text, index) => (
          <p
            key={`overview-${index}`}
            className='mb-8 text-xl text-foreground lg:mb-16 lg:text-2xl'
          >
            {text}
          </p>
        ))}
      </div>

      <dl className='flex flex-col gap-4 px-5 md:flex-row lg:px-0'>
        <dt className='text-xl font-medium lg:text-2xl'>Main Objective:</dt>
        <dd className='text-xl text-foreground lg:text-2xl'>{mainObjective}</dd>
      </dl>
    </section>
  );
}

export default Overview;
