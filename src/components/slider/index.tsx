import styles from "../../styles/Slider.module.scss";
import Card from "../card";
import { useAppSelector } from "../../../hooks";
import { useEffect, useRef, useState } from "react";

interface ProjectType {
  image: string;
  title: string;
  description: string;
  url: string;
  github: string;
  createdAt: string;
  endAt: string;
}

export default function Slider() {
  const gettingProjects = useAppSelector((state) => state.projects.projects);
  const [projects, setProjects] = useState<any>([]);

  const [count, setCount] = useState<number>(0);
  const [desktopMeasure, setDesktopMeasure] = useState<number>(0);
  const [mobileMeasure, setMobileMeasure] = useState<number>(0);
  const [scroll, setScroll] = useState<{}>({
    transform: String,
    transition: String,
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
      if (count < 1) {
        setDesktopMeasure(desktopMeasure - (67 * window.innerWidth) / 100);
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
    setProjects(gettingProjects);
  }, [gettingProjects]);

  useEffect(() => {
    setScroll({
      transform: `translate(${
        window.innerWidth < 1200 ? `${mobileMeasure}px` : `${desktopMeasure}px`
      })`,
      transition: ".7s",
    });
  }, [desktopMeasure, mobileMeasure]);

  return (
    <div className={styles.slider}>
      <aside>
        <i onClick={() => scrollLeft()} className="fas fa-chevron-left"></i>
      </aside>
      <main>
        <span style={scroll} className={styles.scrollable}>
          {projects.map((project: ProjectType, index: number) => {
            return <Card key={index} {...project} />;
          })}
        </span>
      </main>
      <aside>
        <i onClick={() => scrollRight()} className="fas fa-chevron-right"></i>
      </aside>
    </div>
  );
}
