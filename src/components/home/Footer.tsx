import EmailIcon from '@/assets/EmailIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import Icon from '@/assets/Icon';
import LinkedInIcon from '@/assets/LinkedInIcon';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='py-12'>
      <div className='mx-auto max-w-7xl px-5'>
        <div className='text-center xl:flex xl:items-center xl:justify-between xl:text-left'>
          <div className='flex w-full justify-center lg:w-auto xl:items-center xl:justify-start'>
            <Icon />
          </div>
          <div className='mt-8 items-center xl:mt-0 xl:flex xl:justify-end xl:space-x-8'>
            <ul className='flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end'>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='/#home'>Home</Link>
                </Button>
              </li>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='#portfolio' className='text-primary-foreground'>
                    Projects
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='#about-me' className='text-primary-foreground'>
                    About Me
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='#contact' className='text-primary-foreground'>
                    Contact
                  </Link>
                </Button>
              </li>
            </ul>

            <div className='mb-5 mt-8 h-px w-full bg-gray-700 xl:m-0 xl:h-6 xl:w-px' />

            <ul className='flex items-center justify-center space-x-4 xl:justify-end'>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='https://linkedin.com/in/alejandrosandi'>
                    <LinkedInIcon width={16} height={16} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='mailto:a.sandi.developer@gmail.com'>
                    <EmailIcon width={16} height={16} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant='ghost' asChild>
                  <Link href='https://github.com/alejandrosandi22'>
                    <GitHubIcon width={16} height={16} />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
