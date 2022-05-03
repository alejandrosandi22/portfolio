import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setRotate } from '../../../../store/rotateReducer';
import styles from '../../../styles/NextButton.module.scss';

export default function NextButton() {

  const { rotate } = useAppSelector((state) => state.rotate);
  const dispatch = useAppDispatch();

  const goToDifferentView = () => {
    if (rotate.preload) dispatch(setRotate({...rotate, preload: false}));
    if (rotate.current === 'home' && rotate.next === 'projects') {
      dispatch(setRotate({current: 'projects', next: 'aboutMe', degrees: {current: 0, next: 90}}));
    }
    if (rotate.current === 'home' && rotate.next === 'aboutMe') {
      dispatch(setRotate({current: 'aboutMe', next: 'home', degrees: {current: 0, next: 180}}));
    }
    if (rotate.current === 'projects' && rotate.next === 'home') {
      dispatch(setRotate({current: 'home', next: 'projects', degrees: {current: 90, next: 0}}));
    }
    if (rotate.current === 'projects' && rotate.next === 'aboutMe') {
      dispatch(setRotate({current: 'aboutMe', next: 'home', degrees: {current: 90, next: 180}}));
    }
    if (rotate.current === 'aboutMe' && rotate.next === 'home') {
      dispatch(setRotate({current: 'home', next: 'projects', degrees: {current: 180, next: 0}}));
    }
    if (rotate.current === 'aboutMe' && rotate.next === 'projects') {
      dispatch(setRotate({current: 'projects', next: 'aboutMe', degrees: {current: 180, next: 90}}));
    }
  }

  return(
    <div className={`${styles.nextButtonWrapper} ${rotate.current === 'aboutMe' ? styles.isActive : ''}`}>
      <button onClick={goToDifferentView}
      className={`fal fa-chevron-double-down ${styles.nextButton}`}></button>
    </div>
  );
}