import styles from "../../styles/Profile.module.scss";
import Button from "../shared/button";
import Contacts from "../shared/contacts";
export default function Profile() {
  return (
    <>
      <div className={styles.profileWrapper}>
        <h1>Who I am?</h1>
        <p>
          I am a web developer,that I had worked in personal projects using
          technologies like Javascript, Typescript, and frameworks as Angular,
          Vue.js and React. I like to learn and investigate about different
          technologies and tools to progress as a professional and as a person.
        </p>
        <Button href="/Alejandro_Sandí_CV.pdf" caption="Download CV" />
        <div className={styles.contactsWrapper}>
          <Contacts />
        </div>
      </div>
    </>
  );
}
