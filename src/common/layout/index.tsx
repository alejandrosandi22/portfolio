import { RotateContext } from 'context/rotate';
import Head from 'next/head';
import { ReactNode, useContext, useEffect, useState } from 'react';
import styles from 'styles/App.module.scss';

function setTransitionEffect({
  current,
  next,
  set,
}: {
  current: number;
  next: number;
  set: any;
}) {
  const timeTransition: number = 500;

  setTimeout(() => {
    set({
      transform: `rotateX(${current}deg) scale3d(1, 1, 1)`,
    });
  }, timeTransition);

  setTimeout(() => {
    set({
      transform: `rotateX(${current}deg) scale3d(0.85, 0.85, 0.85)`,
    });
  }, timeTransition * 2);

  setTimeout(() => {
    set({
      transform: `rotateX(${next}deg) scale3d(0.85, 0.85, 0.85)`,
    });
  }, timeTransition * 3);

  setTimeout(() => {
    set({
      transform: `rotateX(${next}deg) scale3d(1, 1, 1)`,
    });
  }, timeTransition * 4);
}

export default function Layout({
  home,
  projects,
  aboutMe,
  title,
}: {
  home: ReactNode;
  projects: ReactNode;
  aboutMe: ReactNode;
  title?: string;
}) {
  const { rotate } = useContext(RotateContext);
  const [rotateStyle, setRotateStyle] = useState<{ transform: string }>();

  useEffect(() => {
    const { current, next } = rotate.degrees;
    if (rotate.preload) return;
    return setTransitionEffect({
      current,
      next,
      set: setRotateStyle,
    });
  }, [rotate]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Alejandro Sandí' />
        <meta
          name='description'
          content='Web portfolio for Alejandro Sandí, web developer, to show personal projects and about me'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          name='keywords'
          content='portfolio, projects, developer, programmer, web'
        ></meta>
      </Head>
      <div className={styles.app}>
        <div style={rotateStyle} className={styles.cube}>
          <span className={styles.face}>{home}</span>
          <span className={styles.face}>{aboutMe}</span>
          <span className={styles.face}>{projects}</span>
        </div>
      </div>
    </>
  );
}
