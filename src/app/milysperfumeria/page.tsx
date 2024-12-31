'use server';

import FirebaseIcon from '@/assets/svg/FirebaseIcon';
import NextJSIcon from '@/assets/svg/NextJSIcon';
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon';
import HighlightedResource from '@/components/common/HighlightedResource';
import Hero from '@/components/project/Hero';
import Overview from '@/components/project/Overview';
import Process from '@/components/project/Process';
import Resources from '@/components/project/Resources';

function ProjectPage() {
  return (
    <main>
      <Hero
        title='Mily&#x27;s Perfumer&iacute;a y m&aacute;s'
        video='https://ik.imagekit.io/alejandrosandi/milysperfumeria.mp4?updatedAt=1735600385988'
        description='Perfume website designed to boost sales with a user-friendly interface'
        technologies={[TypeScriptIcon, NextJSIcon, FirebaseIcon]}
        endDate={new Date(2022, 10, 23)}
        website='https://milysperfumeria.com'
      />
      <Overview
        content={[
          'The client requested an online perfume catalog featuring an intuitive interface that allows customers to easily browse and filter products based on images and detailed information.',
          'A key feature was the ability for customers to add items to a cart and initiate a WhatsApp conversation with the owner to complete the purchase.',
        ]}
        mainObjective='To provide a comprehensive and easily accessible collection of products or services'
      />
      <Process
        challenges={[
          'Creating a visually appealing and user-friendly interface for browsing and selecting fragrances.',
          'Developing a seamless and intuitive shopping cart experience.',
          'Integrating WhatsApp functionality for customer support and order placement.',
          'Ensuring a smooth and secure checkout process.',
          'Providing accurate and informative product descriptions and imagery.',
          'Optimizing the website for search engines (SEO) to increase visibility.',
          'Delivering the project within budget and on schedule.',
        ]}
        solutions={[
          'Emphasized high-quality product photography and implemented a user-friendly navigation system with filters and categories.',
          'Developed a robust and user-friendly cart system with features like saving for later, easy product removal, and clear checkout instructions.',
          'Integrated a WhatsApp API for seamless communication with customers and implemented a chatbot for initial inquiries.',
          'Implemented secure payment gateways and ensured data security compliance with industry standards.',
          'Provided detailed product descriptions, high-resolution images, and potentially incorporated scent notes or virtual try-on features.',
          'Optimized website content with relevant keywords, implemented sitemaps, and improved page loading speed.',
          'Utilized agile development methodologies, closely monitored progress, and maintained open communication with the client throughout the project.',
        ]}
      />
      <Resources
        resources={
          <div className='space-y-16'>
            <div className='flex flex-col gap-8 md:flex-row lg:gap-16'>
              <HighlightedResource
                title='Fragrance Shopping, Simplified'
                description='Developed a user-friendly homepage that makes it easy to browse and shop for fragrances'
                src='https://i.ibb.co/mHHw1jB/Milys-Perfumeria-Landing-Page.png'
                height={1920}
                width={4657}
                containerClassName='w-full md:w-3/5'
              />

              <HighlightedResource
                title='Fragrances at Your Fingertips'
                src='https://i.ibb.co/qCQXd07/Milys-Perfumeria-Mobile-Landing-Page.png'
                height={4775}
                width={540}
                containerClassName='md:w-2/5 w-full'
              />
            </div>
            <HighlightedResource
              title='Immersive Fragrance Product View'
              description=' Designed a product detail page that allows users to explore fragrance notes, and discover similar scents.'
              src='https://i.ibb.co/qnYjCwz/Milys-Perfumer-a-Product-View.png'
              height={900}
              width={1600}
            />
            <div className='flex flex-col gap-8 md:flex-row lg:gap-16'>
              <HighlightedResource
                title='Explore Screen on Mobile'
                src='https://i.ibb.co/Zc1VcL9/milysperfumeria-explorar-mobile.webp'
                height={2000}
                width={414}
                imageClassName='w-full'
              />
              <HighlightedResource
                title='Mobile View of Filters'
                src='https://i.ibb.co/tHs8nN1/milysperfumeria-filtros.webp'
                height={2000}
                width={414}
                imageClassName='w-full'
              />
              <HighlightedResource
                title='Admin Screen'
                description='Admin view to add, update, and delete products'
                src='https://i.ibb.co/XzyrchJ/milysperfumeria-admin.webp'
                height={2000}
                width={414}
                imageClassName='w-full'
              />
            </div>
            <HighlightedResource
              title='Effortless Fragrance Exploration'
              description='Browse through a vast collection of perfumes from your favorite brands. Discover new scents and find your perfect match.'
              src='https://i.ibb.co/6tqFcRF/milysperfumeria-explore.webp'
              height={900}
              width={1600}
            />
            <HighlightedResource
              title='Shopping Cart'
              description='A simple and intuitive way to review your order.'
              src='https://i.ibb.co/GTD0w3h/milysperfumeria-cart.webp'
              height={900}
              width={1600}
            />
          </div>
        }
      />
    </main>
  );
}

export default ProjectPage;
