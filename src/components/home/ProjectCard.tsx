import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from '../ui/Button';

type ProjectCardProps = {
  image: string;
  title: string;
  description: ReactNode;
  skills: TechnologyItem[];
  path: string;
  className?: string;
};

function ProjectCard({
  image,
  title,
  description,
  path,
  skills,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'flex w-full max-w-default flex-col gap-5 overflow-hidden border-none bg-card lg:flex-row',
        className,
      )}
    >
      <div className='relative min-h-48 w-full lg:w-2/5'>
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          className='h-[335px] w-full object-cover'
        />
      </div>
      <div className='flex w-full flex-col justify-between lg:w-3/5'>
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </div>
        <CardFooter className='flex justify-between gap-2'>
          <div className='relative z-10'>
            <Button variant={'outline'} asChild className='bg-card'>
              <Link
                href={path}
                aria-label={`View case study for ${title}`}
              >
                View case study
              </Link>
            </Button>
          </div>
          <div className='flex gap-3' aria-label={`Technologies: ${skills.map((s) => s.label).join(', ')}`}>
            {skills.map(({ Icon, label }, index) => (
              <Icon key={index} width={24} height={24} aria-label={label} />
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ProjectCard;
