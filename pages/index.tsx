import { useEffect } from 'react';
import styles from '../styles/App.module.scss';
import Home from '../components/home';
import Projects from '../components/projects';
import { useAppDispatch } from '../hooks';
import { setProjects } from '../store/projectsReducer';

export default function App({ projects }: any) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [projects])

  return (
  <div className={styles.app}>
    <div className={styles.cube}>
      <span className={styles.face}>
        <Projects />
      </span>
      <span className={styles.face}>
        <Home />
      </span>
      <span className={styles.face}>
      </span>
    </div>
  </div>
  );
}


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();
  return {
    props:{projects: data}
  }
}