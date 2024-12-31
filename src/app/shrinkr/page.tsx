'use server';

import NestJSIcon from '@/assets/svg/NestJSIcon';
import NextJSIcon from '@/assets/svg/NextJSIcon';
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon';
import HighlightedResource from '@/components/common/HighlightedResource';
import Hero from '@/components/project/Hero';
import Overview from '@/components/project/Overview';
import Process from '@/components/project/Process';
import Resources from '@/components/project/Resources';

function Project() {
  return (
    <main>
      <Hero
        title='Shrinkr URL Shortener'
        video='https://ik.imagekit.io/alejandrosandi/shrinkr_app.mp4?updatedAt=1735616468851'
        description='A user-friendly URL shortener that simplifies link sharing.'
        technologies={[TypeScriptIcon, NextJSIcon, NestJSIcon]}
        endDate={new Date(2024, 5, 24)}
        repository='https://github.com/alejandrosandi22/shrinkr-client'
      />
      <Overview
        content={[
          'The primary objective of this project was to develop a user-friendly and efficient URL shortener that simplifies link sharing for both individuals and businesses.',
          'To achieve this, a robust and scalable architecture was employed, leveraging the power of Next.js for frontend development and NestJS for backend development. The focus was on creating a seamless user experience with an intuitive interface, providing real-time analytics to track link performance, and implementing robust security measures to ensure data privacy and protection.',
        ]}
        mainObjective='To develop a user-friendly and efficient URL shortening service'
      />
      <Process
        challenges={[
          'Developing a robust and scalable backend architecture.',
          'Designing a user-friendly and intuitive interface that is easy to navigate and use.',
          'Ensuring the security and privacy of user data and shortened URLs.',
          'Implementing real-time analytics and providing meaningful insights to users.',
          'Creating a reliable and efficient URL shortening algorithm.',
          'Addressing potential issues like URL collisions and invalid URLs.',
          'Testing and debugging the system thoroughly to ensure its stability and reliability.',
        ]}
        solutions={[
          'Utilized NestJS with TypeScript for a robust and scalable backend, leveraging features like dependency injection and modularity.',
          'Emphasized user experience in the design process, conducting user research and testing throughout development.',
          'Implemented strong security measures, including data encryption, access control, and regular security audits.',
          'Developed a real-time analytics dashboard using a combination of server-side rendering and client-side interactions.',
          'Implemented a unique URL shortening algorithm with a low probability of collisions.',
          'Thoroughly tested all edge cases and implemented robust error handling mechanisms.',
          'Conducted rigorous unit tests, integration tests, and end-to-end tests to ensure system stability and reliability.',
        ]}
      />
      <Resources
        resources={
          <div className='space-y-16'>
            <div className='flex flex-col gap-8 md:flex-row lg:gap-16'>
              <HighlightedResource
                title='A Clean and Intuitive Interface'
                description='Designed with simplicity in mind, it offers a seamless experience for both users and developers.'
                src='https://i.ibb.co/3dLb74x/shkr-link-landing-page.png'
                height={1920}
                width={4657}
                containerClassName='w-full md:w-3/5'
              />

              <HighlightedResource
                title='Mobile Homepage'
                src='https://i.ibb.co/CPGfhJv/Shrinkr-Mobile-Landing-Page.png'
                height={4775}
                width={540}
                containerClassName='md:w-2/5 w-full'
              />
            </div>
            <HighlightedResource
              title='User Insights'
              description='Get a quick overview of key metrics and insights'
              src='https://i.ibb.co/WcLP6f0/dashboard-shrinkr.webp'
              height={900}
              width={1600}
            />
            <div className='flex flex-col gap-8 md:flex-row lg:gap-16'>
              <div className='md:w-1/3'>
                <HighlightedResource
                  title='URL List'
                  description='Keep track of your custom URLs and their performance'
                  src='https://i.ibb.co/tm65vCJ/shrinkr-urls-list.webp'
                  width={414}
                  height={896}
                  imageClassName='w-full'
                />
              </div>
              <div className='md:w-1/3'>
                <HighlightedResource
                  title='Account Settings'
                  description='Tailor your account to fit your preferences.'
                  src='https://i.ibb.co/WFCVwYF/shrinkr-settings.webp'
                  width={414}
                  height={896}
                  imageClassName='w-full'
                />
              </div>
              <div className='md:w-1/3'>
                <HighlightedResource
                  title='Support Center'
                  description='Get help with any issues you may encounter.'
                  src='https://i.ibb.co/KySbz88/shrinkr-support.png'
                  width={414}
                  height={896}
                  imageClassName='w-full'
                />
              </div>
            </div>
            <HighlightedResource
              title='Intuitive Light Mode Interface'
              description='Experience a bright and airy workspace.'
              src='https://i.ibb.co/PWBk3T7/shrinkr-lightmode.webp'
              height={1076}
              width={1920}
            />
            <HighlightedResource
              title='Create Short Links & QR Codes'
              description='Share Your Content Easily with Short Links and QR Codes'
              src='https://i.ibb.co/NVQqpzG/shrinkr-shorten-url-no-registered.webp'
              height={900}
              width={1600}
            />
            <HighlightedResource
              title='In-depth Link Performance'
              description="Gain valuable insights into your link's performance."
              src='https://i.ibb.co/nDmskMr/shrinkr-url-stats.webp'
              height={1920}
              width={2346}
            />
          </div>
        }
      />
    </main>
  );
}

export default Project;
