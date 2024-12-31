import EmailIcon from '@/assets/EmailIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import LinkedInIcon from '@/assets/LinkedInIcon';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Image from 'next/image';
import Link from 'next/link';

function AboutMe() {
  return (
    <section id='about-me'>
      <Card className='rounded-none border-l-0 border-r-0'>
        <CardHeader>
          <div className='mb-8 flex w-full flex-col items-center'>
            <span className='mb-2 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text font-migra text-base font-medium text-transparent'>
              About Me
            </span>
            <h2 className='w-full text-center text-3xl font-medium md:text-4xl lg:text-5xl'>
              The Passion Behind My Work
            </h2>
          </div>
        </CardHeader>
        <CardContent className='left-0 right-0 m-auto max-w-default justify-between lg:flex'>
          <div className='flex flex-col justify-between text-lg text-foreground lg:w-1/2'>
            <div>
              <p className='mb-4'>
                As a skilled Web Developer proficient in modern technologies. I
                have a strong ability to design and implement scalable,
                user-focused web applications. My expertise lies in creating
                seamless user interfaces and developing efficient and robust
                back-end systems to deliver high-performance, responsive
                solutions.
              </p>
              <p className='mb-8'>
                Driven by a continuous desire to grow, I excel at solving
                complex problems and collaborating effectively with
                cross-functional teams. I am dedicated to building robust
                systems that align with business goals and enhance user
                satisfaction. My focus is on delivering high-quality code and
                contributing to impactful, innovative projects.
              </p>
            </div>
            <div className='left-0 right-0 m-auto flex w-full gap-3'>
              <Link href='https://linkedin.com/in/alejandrosandi'>
                <LinkedInIcon width={24} height={24} />
              </Link>
              <Link href='mailto:a.sandi.developer@gmail.com'>
                <EmailIcon width={24} height={24} />
              </Link>
              <Link href='https://github.com/alejandrosandi22'>
                <GitHubIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className='relative mt-20 flex justify-center px-10 lg:mt-0 lg:w-2/5'>
            <div className='aspect-square h-80 px-5 lg:px-0'>
              <Image
                src='https://i.ibb.co/4Ky2mdM/Profile-Picture-Alejandro-Sand.jpg'
                alt='Alejandro Sandí Web Developer'
                width={512}
                height={512}
                className='h-full w-full rounded-[100px] object-cover'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutMe;
