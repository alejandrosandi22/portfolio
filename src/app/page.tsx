import AboutMe from '@/components/home/AboutMe';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}

export default Home;
