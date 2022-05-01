import styles from '../../../styles/Contacts.module.scss';

export default function Contacts() {
  return(
    <>
      <a className={styles.contact} href='https://github.com/AleSandi22' target='_blank'><i className='fab fa-github'></i></a>
      <a className={styles.contact} href='mailto:a.sandi.developer@gmail.com' target='_blank'><i className='far fa-envelope'></i></a>
      <a className={styles.contact} href='https://www.facebook.com/alesandi22/' target='_blank'><i className='fab fa-facebook'></i></a>
      <a className={styles.contact} href='https://www.linkedin.com/in/alejandrosandi/' target='_blank'><i className='fab fa-linkedin'></i></a>
    </>
  );
}