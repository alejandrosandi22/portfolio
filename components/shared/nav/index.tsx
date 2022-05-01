import { useState } from 'react';
import styles from '../../../styles/Nav.module.scss';

export default function Nav() {
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const handleToggle = () => setIsActive(!isActive);

  return(
    <>
      <nav className={styles.nav}>
        <img src='/logo.png' alt='logo' />
        <div onClick={handleToggle} className={`${styles.toggleWrapper} ${isActive ? styles.bg : ''}`}>
          <div className={`${styles.toggle} ${isActive ? styles.active : ''}`}></div>
        </div>
        <ul className={`${isActive ? '' : styles.hidde}`}>
          <li id='home'>Home</li>
          <li id='projects'>Projects</li>
          <li id='about-me'>About Me</li>
        </ul>
      </nav>
    </>
  );
}