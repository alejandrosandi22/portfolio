import Image from 'next/image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/Nav.module.scss';
import { RotateContext } from 'context/rotate';

export default function Nav() {
  const { rotate, handleSetRotate: setRotate } = useContext(RotateContext);
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  const handleToggle = () => setIsActive(!isActive);

  const goToHome = () => {
    setIsActive(false);
    if (rotate.next === 'home') return;

    return setRotate({
      current: rotate.next,
      next: 'home',
      degrees: { current: rotate.degrees.next, next: 0 },
    });
  };

  const goToProjects = () => {
    setIsActive(false);
    if (rotate.next === 'projects') return;

    return setRotate({
      current: rotate.next,
      next: 'projects',
      degrees: { current: rotate.degrees.next, next: 90 },
    });
  };

  const goToAboutMe = () => {
    setIsActive(false);
    if (rotate.next === 'aboutMe') return;

    return setRotate({
      current: rotate.next,
      next: 'aboutMe',
      degrees: { current: rotate.degrees.next, next: 180 },
    });
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <Image src='/logo.webp' alt='logo' layout='fill' />
        </div>
        <div
          onClick={handleToggle}
          className={`${styles.toggleWrapper} ${isActive ? styles.bg : ''}`}
        >
          <div
            className={`${styles.toggle} ${isActive ? styles.active : ''}`}
          ></div>
        </div>
        <ul className={`${isActive ? '' : styles.hidde}`}>
          <li id='home' onClick={() => goToHome()}>
            {router.asPath === '/' ? 'Home' : 'Inicio'}
          </li>
          <li id='projects' onClick={() => goToProjects()}>
            {router.asPath === '/' ? 'Projects' : 'Proyectos'}
          </li>
          <li id='aboutMe' onClick={() => goToAboutMe()}>
            {router.asPath === '/' ? 'About Me' : 'Sobre Mi'}
          </li>
        </ul>
      </nav>
    </>
  );
}
