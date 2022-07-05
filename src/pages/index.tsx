import { useContext, useEffect } from 'react';
import Home from 'components/home';
import Projects from 'components/projects';
import AboutMe from 'components/aboutMe';
import { ProjectsType } from 'types';
import { GetStaticProps } from 'next';
import Layout from 'common/layout';
import { ProjectsContext } from 'context/projects';

export default function App({ projects }: { projects: ProjectsType[] }) {
  const { handleSetProjects } = useContext(ProjectsContext);

  useEffect(() => {
    handleSetProjects(projects);
  }, [projects, handleSetProjects]);

  return (
    <Layout
      title='Alejandro Sandí | Web Developer'
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
