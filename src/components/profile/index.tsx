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
              I am a web developer eager to learn and add value to any business.
              Therefore, in my free time I dedicate myself to making personal
              projects using technologies such as Javascript, Typescript, and
              frameworks such as Angular, Vue.js and React.
            </p>
          </>
        ) : (
          <>
            <h1>Quién soy?</h1>
            <p>
              Soy un desarrollador web apasionado por aprender y añadir valor a
              cualquier empresa. Por ello, en mi tiempo libre me dedico a
              relizar proyectos personales usando tecnologías como Javascript,
              Typescript, y frameworks como Angular, Vue.js y React.
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
