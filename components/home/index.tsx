import styles from '../../styles/Home.module.scss';
import Nav from '../shared/nav';
import Contacts from '../shared/contacts';
import NextButton from '../shared/nextButton';

export default function Home() {
  return (
    <>
    <Nav />
    <div className={styles.home}>
      <div className={styles.view}>
        <span>
          <h1>Alejandro Sandí</h1>
          <h2>Web Developer</h2>
        </span>
        <div className={styles.contactsWrapper}>
          <Contacts />
        </div>
      </div>
    </div>
    <NextButton />
    </>
  )
}
