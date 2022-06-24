import { useRouter } from 'next/router';
import styles from '../../styles/Profile.module.scss';
import Button from '../shared/button';
import Contacts from '../shared/contacts';

export default function Profile() {
  const router = useRouter();

  return (
    <>
      <div className={styles.profileWrapper}>
        {router.asPath === '/' ? (
          <>
            <h1>Who I am?</h1>
            <p>
              I am a web developer, that I had worked in personal projects using
              technologies like Javascript, Typescript, and frameworks as
              Angular, Vue.js and React. I like to learn and investigate about
              different technologies and tools to progress as a professional.
            </p>
          </>
        ) : (
          <>
            <h1>Quién soy?</h1>
            <p>
              Soy un desarrollador web, que he trabajado en proyectos personales
              usando tecnologías como Javascript, Typescript, y frameworks como
              Angular, Vue.js y React. Me gusta aprender y investigar sobre
              diferentes tecnologías y herramientas para progresar como un
              profesional.
            </p>
          </>
        )}
        <span className={styles.buttonWrapper}>
          {router.asPath === '/' ? (
            <Button href='/Alejandro_Sandí_CV.pdf' caption='Download CV' />
          ) : (
            <Button href='/Alejandro_Sandí_CV.pdf' caption='Descargar CV' />
          )}
        </span>
        <div className={styles.contactsWrapper}>
          <Contacts />
        </div>
      </div>
    </>
  );
}
