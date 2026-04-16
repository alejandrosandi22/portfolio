import Navbar from '@/components/common/Navbar';
import Footer from '@/components/home/Footer';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Helvetica-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Helvetica-Black.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica',
});

const migra = localFont({
  src: '../assets/fonts/Migra-Extralight.ttf',
  display: 'swap',
  variable: '--font-migra',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Alejandro Sandí - Front-End & Back-End Developer',
    default: 'Alejandro Sandí - Front-End & Back-End Developer',
  },
  description:
    'A results-oriented Web Developer with strong experiences as a Front-End & Back-End Developer, I thrive in dynamic environments. My strong problem-solving abilities and commitment to teamwork enable me to deliver efficient, high-quality solutions that align with business goals.',
  icons: { icon: './favicon.ico' },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-background text-primary-foreground antialiased ${migra.variable} ${helvetica.variable}`}
        suppressHydrationWarning
      >
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring'
        >
          Skip to main content
        </a>
        <main id='main-content' className='w-full overflow-x-hidden font-helvetica'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
