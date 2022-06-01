import React from 'react';
import styles from '../../styles/Card.module.scss';
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
  url: string;
  github: string;
  createdAt: string;
  endAt: string;
}

function Card({
  image,
  title,
  description,
  url,
  github,
  createdAt,
  endAt,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <Image src={image} alt='preview' layout='fill' loading='lazy' />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{description}</p>
      </div>
      <div className={styles.time}>
        <h6>Created at: {createdAt}</h6>
        <h6>Finished at: {endAt}</h6>
      </div>
      <div className={styles.actions}>
        <a href={url} target='_blank' rel='noreferrer'>
          View
        </a>
        <a href={github} target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
}

export default React.memo(Card);
