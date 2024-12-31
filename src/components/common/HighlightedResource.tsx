import cn from '@/utils/cn';
import Image from 'next/image';

type HighlightedResourceProps = {
  title?: string;
  description?: string;
  src: string;
  width: number;
  height: number;
  containerClassName?: string;
  imageClassName?: string;
};

function HighlightedResource({
  title,
  description,
  src,
  width,
  height,
  containerClassName,
  imageClassName,
}: HighlightedResourceProps) {
  return (
    <div className={cn('flow-root', containerClassName)}>
      <div className='flex h-full max-h-[1700px] flex-col overflow-hidden rounded-xl bg-gray-400/5 p-2 shadow-md ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
        <div className='mb-auto flex-grow-0'>
          {title ? (
            <h6 className='mb-2 mt-4 text-2xl font-bold md:text-3xl lg:text-4xl'>
              {title}
            </h6>
          ) : null}
          {description ? (
            <p className='mb-5 font-migra text-xl text-foreground md:text-2xl'>
              {description}
            </p>
          ) : null}
        </div>
        <div className='w-full flex-grow overflow-hidden rounded-md'>
          <Image
            src={src}
            width={width}
            height={height}
            alt='Product Preview'
            quality={100}
            className={cn('rounded-md object-cover object-top', imageClassName)}
          />
        </div>
      </div>
    </div>
  );
}

export default HighlightedResource;
