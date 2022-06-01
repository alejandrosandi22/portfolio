import styles from '../../../styles/Button.module.scss';

export default function Button({ href, caption }: any) {
  return (
    <>
      <a className={styles.a} href={href} target='_blank' rel='noreferrer'>
        {caption}
      </a>
    </>
  );
}
