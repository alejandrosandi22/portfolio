import styles from 'styles/Button.module.scss';

export default function Button({
  href,
  caption,
}: {
  href: string;
  caption: string;
}) {
  return (
    <>
      <a className={styles.button} href={href} target='_blank' rel='noreferrer'>
        {caption}
      </a>
    </>
  );
}
