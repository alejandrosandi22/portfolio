import { useEffect, useRef, useState } from 'react';
import styles from '../styles/App.module.scss';
import Home from '../components/home';
import Projects from '../components/projects';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setProjects } from '../../store/projectsReducer';
import AboutMe from '../components/aboutMe';
import { ProjectsType } from 'types';

export default function App({ projects }: { projects: ProjectsType[] }) {
  const { rotate } = useAppSelector((state) => state.rotate);
  const [rotateStyle, setRotateStyle] = useState<{}>({});
  const timeTransition = useRef<number>(500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [projects, dispatch]);

  useEffect(() => {
    if (rotate.preload) return;
    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.current}deg) scale(.85) scaleZ(.85)`,
        transition: '.5s',
      });
    }, timeTransition.current);

    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.next}deg) scale(.85) scaleZ(.85)`,
        transition: '.5s',
      });
    }, timeTransition.current * 2);

    setTimeout(() => {
      setRotateStyle({
        transform: `rotateX(${rotate.degrees.next}deg) scale(1) scaleZ(1)`,
        transition: '.5s',
      });
    }, timeTransition.current * 3);
  }, [rotate]);

  return (
    <div className={styles.app}>
      <div style={rotateStyle} className={styles.cube}>
        <span className={styles.face}>
          <Home />
        </span>
        <span className={styles.face}>
          <AboutMe />
        </span>
        <span className={styles.face}>
          <Projects />
        </span>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res: Response = await fetch('https://alejandrosandi.com/api/projects');
  const data: ProjectsType[] = await res.json();
  return {
    props: {
      projects: data,
    },
  };
};
