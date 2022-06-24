import React from 'react';
import Profile from '../profile';
import Nav from '../shared/nav';
import NextButton from '../shared/nextButton';
import styles from '../../styles/AboutMe.module.scss';
import Technologies from '../technologies';

function AboutMe() {
  return (
    <>
      <Nav />
      <section className={styles.section}>
        <Profile />
        <Technologies />
      </section>
      <p className={styles.h6}> © Alejandro Sandí 2022</p>
      <NextButton />
    </>
  );
}

export default React.memo(AboutMe);
