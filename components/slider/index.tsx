import styles from '../../styles/Slider.module.scss';
import Card from '../card';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';

interface ProjectType {
  image: string,
  title: string,
  description: string,
  url: string,
  github: string,
  createdAt: string,
  endAt: string
}

export default function Slider() {
  
  const gettingProjects = useAppSelector((state) => state.projects.projects);
  const [ projects, setProjects ] = useState<any>([]);

  useEffect(() => {
    setProjects(gettingProjects);
  }, [gettingProjects])

  return(
    <div className={styles.slider}>
      <aside><i className='fas fa-chevron-left'></i></aside>
      <main>
        <span className={styles.scrollable}>
          {
            projects.map((project: ProjectType, index: number) => {
              return <Card key={index} {...project} />
            })
          }
        </span>
      </main>
      <aside><i className='fas fa-chevron-right'></i></aside>
    </div>
  );
}