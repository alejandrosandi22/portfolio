import Image from 'next/image';
import styles from '../../../styles/Contacts.module.scss';

export default function Contacts() {
  return (
    <>
      <a
        className={styles.contact}
        href='https://github.com/alejandrosandi22'
        target='_blank'
        rel='noreferrer'
      >
        <Image src='/static/icons/github.webp' layout='fill' alt='github' />
      </a>
      <a
        className={styles.contact}
        href='mailto:a.sandi.developer@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image src='/static/icons/gmail.webp' layout='fill' alt='github' />
      </a>
      <a
        className={styles.contact}
        href='https://www.facebook.com/alesandi22/'
        target='_blank'
        rel='noreferrer'
      >
        <Image src='/static/icons/facebook.webp' layout='fill' alt='github' />
      </a>
      <a
        className={styles.contact}
        href='https://www.linkedin.com/in/alejandrosandi/'
        target='_blank'
        rel='noreferrer'
      >
        <Image src='/static/icons/linkedin.webp' layout='fill' alt='github' />
      </a>
    </>
  );
}
