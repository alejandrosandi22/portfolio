import { useEffect, useRef, useState } from 'react';
import Home from '../components/home';
import Projects from '../components/projects';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setProjects } from '../../store/projectsReducer';
import AboutMe from '../components/aboutMe';
import { ProjectsType } from 'types';
import { GetStaticProps } from 'next';
import Layout from 'components/layout';

export default function App({ projects }: { projects: ProjectsType[] }) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('Alejandro Sandí | Web Developer');

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [projects, dispatch]);

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
  const res: Response = await fetch('https://alejandrosandi.com/api/projects');
  const data: ProjectsType[] = await res.json();

  return {
    props: {
      projects: data,
    },
  };
};
