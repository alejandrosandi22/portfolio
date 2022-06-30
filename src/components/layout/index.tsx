import Head from 'next/head';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'hooks';
import styles from 'styles/App.module.scss';
import { StylesType } from 'types';

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
  const { rotate } = useAppSelector((state) => state.rotate);
  const [rotateStyle, setRotateStyle] = useState<StylesType>({
    transform: 'rotateX(0deg) scale(1) scaleZ(1)',
    transition: '0s',
  });
  const timeTransition = useRef<number>(500);

  useEffect(() => {
    if (rotate.preload) return;
    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.current}deg) scale(.85) scaleZ(.85)`,
        transition: `${timeTransition.current / 1000}s`,
      });
    }, timeTransition.current);

    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.next}deg) scale(.85) scaleZ(.85)`,
        transition: `${timeTransition.current / 1000}s`,
      });
    }, timeTransition.current * 2);

    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.next}deg) scale(1) scaleZ(1)`,
        transition: `${timeTransition.current / 1000}s`,
      });
    }, timeTransition.current * 3);
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
