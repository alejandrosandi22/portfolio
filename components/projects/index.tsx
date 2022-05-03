import React from 'react';
import styles from '../../styles/Projects.module.scss';
import Nav from '../shared/nav';
import NextButton from '../shared/nextButton';
import Slider from '../slider';

function Projects() {
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

export default React.memo(Projects);