import Link from 'next/link';
import { JSX } from 'react';

type InformationProps = {
  technologies: Array<(props: IconProps) => JSX.Element>;
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
            {technologies.map((IconComponent, index) => (
              <IconComponent
                key={`technologie-${index}`}
                width={24}
                height={24}
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
                className='text-foreground hover:underline'
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
                className='text-foreground hover:underline'
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
