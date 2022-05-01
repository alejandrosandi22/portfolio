import styles from '../../styles/Card.module.scss';

interface CardProps {
  image: string,
  title: string,
  description: string,
  url: string,
  github: string,
  createdAt: string,
  endAt: string
}

export default function Card({ image, title, description, url, github, createdAt, endAt }: CardProps) {
  return(
    <div className={styles.card}>
      <div className={styles.preview}>
        <img src={image} alt='preview' />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{ description }</p>
      </div>
      <div className={styles.actions}>
        <a href={url} target='_blank'>View</a>
        <a href={github} target='_blank'><i className='fab fa-github'></i></a>
      </div>
    </div>
  );
}