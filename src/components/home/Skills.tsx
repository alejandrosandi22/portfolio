'use client';

import GitIcon from '@/assets/svg/GitIcon';
import JavaScriptIcon from '@/assets/svg/JavaScriptIcon';
import NestJSIcon from '@/assets/svg/NestJSIcon';
import NextJSIcon from '@/assets/svg/NextJSIcon';
import NodeIcon from '@/assets/svg/NodeIcon';
import ReactIcon from '@/assets/svg/ReactIcon';
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon';
import VuejsIcon from '@/assets/svg/VuejsIcon';
import { Card, CardContent } from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/Carousel';
import Autoplay from 'embla-carousel-autoplay';

const skills = [
  { icon: <TypeScriptIcon aria-hidden='true' />, label: 'TypeScript' },
  { icon: <JavaScriptIcon aria-hidden='true' />, label: 'JavaScript' },
  { icon: <ReactIcon aria-hidden='true' />, label: 'React' },
  { icon: <NextJSIcon aria-hidden='true' />, label: 'Next.js' },
  { icon: <VuejsIcon aria-hidden='true' />, label: 'Vue.js' },
  { icon: <GitIcon aria-hidden='true' />, label: 'Git' },
  { icon: <NestJSIcon aria-hidden='true' />, label: 'NestJS' },
  { icon: <NodeIcon aria-hidden='true' />, label: 'Node.js' },
];

function Skills() {
  return (
    <div className='relative flex'>
      <div className='absolute left-0 z-10 h-full w-full bg-gradient-to-r from-background from-0% via-background/0 via-50% to-background to-100%' />
      <Carousel
        plugins={[
          Autoplay({
            delay: 1500,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        aria-label='Technology skills'
        className='relative z-0 w-full max-w-sm px-10 lg:px-0'
      >
        <CarouselContent>
          {skills.map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-1/3 lg:basis-1/3 xl:basis-1/4'
              aria-label={item.label}
            >
              <div className='p-1'>
                <Card className='border-none bg-transparent'>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    {item.icon}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Skills;
