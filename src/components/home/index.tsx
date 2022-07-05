import styles from 'styles/Home.module.scss';
import Nav from '../shared/nav';
import Contacts from '../shared/contacts';
import NextButton from '../shared/nextButton';
import React from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  return (
    <>
      <Nav />
      <div className={styles.home}>
        <div className={styles.view}>
          <span>
            <h1>Alejandro Sandí</h1>
            {router.asPath === '/' ? (
              <h2>Web Developer</h2>
            ) : (
              <h2>Desarrollador Web</h2>
            )}
          </span>
          <div className={styles.contactsWrapper}>
            <Contacts />
          </div>
        </div>
      </div>
      <NextButton />
    </>
  );
}

export default React.memo(Home);
