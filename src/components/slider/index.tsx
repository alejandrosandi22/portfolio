import { useContext, useEffect, useState } from 'react';
import { ProjectsType, StylesType } from 'types';
import { ProjectsContext } from 'context/projects';
import Card from '../card';
import Image from 'next/image';
import styles from 'styles/Slider.module.scss';

export default function Slider() {
  const { projects: gettingProjects } = useContext(ProjectsContext);
  const [projects, setProjects] = useState<ProjectsType[]>([]);

  const [count, setCount] = useState<number>(0);
  const [desktopMeasure, setDesktopMeasure] = useState<number>(0);
  const [mobileMeasure, setMobileMeasure] = useState<number>(0);
  const [scroll, setScroll] = useState<StylesType>({
    transform: 'translate(0)',
    transition: '0s',
  });

  const scrollLeft = () => {
    if (window.innerWidth <= 1200) {
      if (count > 0) {
        setMobileMeasure(mobileMeasure + (65 * window.innerWidth) / 100);
        setCount(count - 1);
      }
    } else {
      if (count > 0) {
        setDesktopMeasure(desktopMeasure + (67 * window.innerWidth) / 100);
        setCount(count - 1);
      }
    }
  };

  const scrollRight = () => {
    if (window.innerWidth <= 1200) {
      if (count < projects.length - 1) {
        setMobileMeasure(mobileMeasure - (65 * window.innerWidth) / 100);
        setCount(count + 1);
      }
    } else {
      if (count < 2) {
        setDesktopMeasure(desktopMeasure - (67 * window.innerWidth) / 100);
        setCount(count + 1);
      }
    }
  };

  useEffect(() => setProjects(gettingProjects), [gettingProjects]);

  useEffect(() => {
    setScroll({
      transform: `translate(${
        window.innerWidth < 1200 ? `${mobileMeasure}px` : `${desktopMeasure}px`
      })`,
      transition: '.7s',
    });
  }, [desktopMeasure, mobileMeasure]);

  return (
    <div className={styles.slider}>
      <aside>
        <button onClick={() => scrollLeft()} className='fas fa-chevron-left'>
          <Image
            src='/static/icons/right-arrow.webp'
            layout='fill'
            alt='right-arrow'
          />
        </button>
      </aside>
      <main>
        <span style={scroll} className={styles.scrollable}>
          {projects.map((project: ProjectsType, index: number) => {
            return <Card key={index} {...project} />;
          })}
        </span>
      </main>
      <aside>
        <button onClick={() => scrollRight()}>
          <Image
            src='/static/icons/right-arrow.webp'
            layout='fill'
            alt='right-arrow'
          />
        </button>
      </aside>
    </div>
  );
}
