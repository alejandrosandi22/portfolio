import React, { useState } from 'react';
import styles from '../../styles/Card.module.scss';
import Image from 'next/image';
import { ProjectsType } from 'types';
import { useRouter } from 'next/router';

function Card({
  image,
  title,
  description,
  url,
  github,
  createdAt,
  endAt,
}: ProjectsType) {
  const [src, setSrc] = useState(image);
  const router = useRouter();
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <Image
          onError={() => setSrc('/static/images/error-image-generic.webp')}
          placeholder='blur'
          blurDataURL={image}
          src={src}
          alt={title}
          loading='lazy'
          layout='fill'
        />
      </div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
      </div>
      <div className={styles.time}>
        {router.asPath === '/' ? (
          <>
            <p>Created at: {createdAt}</p>
            <p>Finished at: {endAt}</p>
          </>
        ) : (
          <>
            <p>Empezado en: {createdAt}</p>
            <p>Terminado en: {endAt}</p>
          </>
        )}
      </div>
      <div className={styles.actions}>
        <a href={url} target='_blank' rel='noreferrer'>
          {router.asPath === '/' ? 'View' : 'Ver'}
        </a>
        <a
          className={styles.githubButton}
          href={github}
          target='_blank'
          rel='noreferrer'
        >
          <Image src='/static/icons/github.webp' layout='fill' alt='github' />
        </a>
      </div>
    </div>
  );
}

export default React.memo(Card);
