import { useEffect, useState } from 'react';
import Home from 'components/home';
import Projects from 'components/projects';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setProjects } from '../../../store/projectsReducer';
import AboutMe from 'components/aboutMe';
import { ProjectsType } from 'types';
import { GetStaticProps } from 'next';
import Layout from 'components/layout';

export default function App({ projects }: { projects: ProjectsType[] }) {
  const { rotate } = useAppSelector((state) => state.rotate);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(
    'Alejandro Sandí | Desarrollador Web'
  );

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [projects, dispatch]);

  useEffect(() => {
    setTitle(rotate.current);
    if (rotate.current === 'home') {
      return setTitle('Alejandro Sandí | Desarrollador Web');
    }
    if (rotate.current === 'projects') {
      return setTitle('Alejandro Sandí | Proyectos');
    }
    if (rotate.current === 'aboutMe') {
      return setTitle('Alejandro Sandí | Sobre mí');
    }
  }, [rotate]);

  return (
    <Layout
      title={title}
      home={<Home />}
      projects={<Projects />}
      aboutMe={<AboutMe />}
    ></Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res: Response = await fetch(
    'https://alejandrosandi.com/api/projectsEs'
  );
  const data: ProjectsType[] = await res.json();

  return {
    props: {
      projects: data,
    },
  };
};
