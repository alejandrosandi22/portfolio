import styles from '../../styles/Projects.module.scss';
import Nav from '../shared/nav';
import NextButton from '../shared/nextButton';
import Slider from '../slider';

export default function Projects() {
  return(
    <>
    <Nav />
    <div className={styles.projects}>
      <Slider />
    </div>
    <NextButton />
    </>
  );
}