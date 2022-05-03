import styles from '../../styles/Profile.module.scss';
import Button from '../shared/button';
import Contacts from '../shared/contacts';
export default function Profile() {
  return(
    <>
    <div className={styles.profileWrapper}>
      <h1>Who I am?</h1>
      <p>I'm a web developer. I have experience in projects with Javascript and Typescript, using frameworks as Angular, Vue js and React js. I like to learn and relearn about different technologies and tools. Also, I investigate about what I don't know and what I know, because there always exist something new to learn.</p>
      <Button href='/Alejandro_Sandí_CV.pdf' caption='Download CV'/>
      <div className={styles.contactsWrapper}>
        <Contacts />
      </div>
    </div>
    </>
  );
}