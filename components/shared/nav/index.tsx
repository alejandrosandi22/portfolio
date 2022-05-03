import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setRotate } from '../../../store/rotateReducer';
import styles from '../../../styles/Nav.module.scss';

export default function Nav() {

  const { rotate } = useAppSelector((state) => state.rotate);
  const dispatch = useAppDispatch();
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const handleToggle = () => setIsActive(!isActive);

  const goToHome = () => {
    let currentDegrees: number = 0;

    setIsActive(false);

    if (rotate.current === 'home') return;
    if (rotate.current === 'projects') currentDegrees = 90;
    if (rotate.current === 'aboutMe') currentDegrees = 180;

    dispatch(setRotate({
      current: 'home',
      next: 'projects',
      degrees: {current: currentDegrees, next: 0}
    }));
  }

  const goToProjects = () => {
    let currentDegrees:number = 0;

    setIsActive(false);

    if (rotate.current === 'projects') return;
    if (rotate.current === 'home') currentDegrees = 0;
    if (rotate.current === 'aboutMe') currentDegrees = 180;
    
    dispatch(setRotate({
      current: 'projects',
      next: 'aboutMe',
      degrees: {current: currentDegrees, next: 90}
    }));
  }

  const goToAboutMe = () => {
    let currentDegrees:number = 0;
    
    setIsActive(false);

    if (rotate.current === 'aboutMe') return;
    if (rotate.current === 'home') currentDegrees = 0;
    
    if (rotate.current === 'projects') currentDegrees = 90;
    dispatch(setRotate({
      current: 'aboutMe',
      next: 'home',
      degrees: {current: currentDegrees, next: 180}
    }));
  }

  return(
    <>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <Image src='/logo.png' alt='logo' layout='fill' />
        </div>
        <div onClick={handleToggle} className={`${styles.toggleWrapper} ${isActive ? styles.bg : ''}`}>
          <div className={`${styles.toggle} ${isActive ? styles.active : ''}`}></div>
        </div>
        <ul className={`${isActive ? '' : styles.hidde}`}>
          <li id='home' onClick={goToHome}>Home</li>
          <li id='projects' onClick={goToProjects}>Projects</li>
          <li id='aboutMe' onClick={goToAboutMe}>About Me</li>
        </ul>
      </nav>
    </>
  );
}