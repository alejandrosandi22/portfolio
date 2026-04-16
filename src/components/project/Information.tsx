import Link from 'next/link';

type InformationProps = {
  technologies: TechnologyItem[];
  website?: string;
  repository?: string;
  endDate: Date;
};

function Information({
  endDate,
  technologies,
  repository,
  website,
}: InformationProps) {
  return (
    <div className='left-0 right-0 m-auto mt-24 w-full max-w-default px-4'>
      <dl className='grid w-full grid-cols-2 justify-between gap-6 md:grid-cols-4'>
        <div>
          <dt>Date</dt>
          <dd>
            {endDate.getFullYear()},{endDate.getMonth() + 1}
          </dd>
        </div>
        <div>
          <dt>Technologies</dt>
          <dd className='flex gap-3'>
            {technologies.map(({ Icon, label }, index) => (
              <Icon
                key={`technology-${index}`}
                width={24}
                height={24}
                aria-label={label}
              />
            ))}
          </dd>
        </div>
        <div>
          <dt>Repository</dt>
          <dd>
            {repository ? (
              <Link
                href={repository}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:underline'
                aria-label='View source repository (opens in new tab)'
              >
                Visit
              </Link>
            ) : (
              <span>N/D</span>
            )}
          </dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd>
            {website ? (
              <Link
                href={website}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:underline'
                aria-label='Visit live website (opens in new tab)'
              >
                Visit
              </Link>
            ) : (
              <span>N/D</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Information;
