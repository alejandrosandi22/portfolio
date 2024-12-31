type ProcessProps = {
  challenges: string[];
  solutions: string[];
};

function Process({ challenges, solutions }: ProcessProps) {
  return (
    <section className='left-0 right-0 m-auto mt-24 max-w-default px-5 lg:px-0'>
      <div className='mb-8 w-full md:mb-16'>
        <h2 className='w-full text-3xl font-medium md:text-4xl lg:text-5xl'>
          Process
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        <div>
          <h6 className='mb-4 rounded-lg bg-card py-2 text-center text-xl font-medium md:text-2xl'>
            Challenges
          </h6>
          <ul className='list-inside list-disc space-y-2 text-foreground'>
            {challenges.map((challenge, index) => (
              <li key={`challenge-${index}`} className='text-lg md:text-xl'>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='mb-4 rounded-lg bg-card py-2 text-center text-xl font-medium md:text-2xl'>
            Solutions
          </h6>
          <ul className='list-inside list-disc space-y-2 text-foreground'>
            {solutions.map((solution, index) => (
              <li key={`solution-${index}`} className='text-lg md:text-xl'>
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Process;
