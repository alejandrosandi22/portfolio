import { RotateContext } from 'context/rotate';
import Image from 'next/image';
import { useContext } from 'react';
import styles from 'styles/NextButton.module.scss';

export default function NextButton() {
  const { rotate, handleSetRotate: setRotate } = useContext(RotateContext);

  const goToDifferentView = () => {
    if (rotate.preload) setRotate({ ...rotate, preload: false });

    if (rotate.next === 'home') {
      setRotate({
        current: rotate.next,
        next: 'projects',
        degrees: { current: rotate.degrees.next, next: 90 },
      });
    }

    if (rotate.next === 'projects') {
      setRotate({
        current: rotate.next,
        next: 'aboutMe',
        degrees: { current: rotate.degrees.next, next: 180 },
      });
    }

    if (rotate.next === 'aboutMe') {
      setRotate({
        current: rotate.next,
        next: 'home',
        degrees: { current: rotate.degrees.next, next: 0 },
      });
    }
  };

  return (
    <div
      className={`${styles.nextButtonWrapper} ${
        rotate.next === 'aboutMe' ? styles.isActive : ''
      }`}
    >
      <button onClick={() => goToDifferentView()} className={styles.nextButton}>
        <Image
          src='/static/icons/down-arrow.webp'
          layout='fill'
          alt='down-arrow'
        />
      </button>
    </div>
  );
}
