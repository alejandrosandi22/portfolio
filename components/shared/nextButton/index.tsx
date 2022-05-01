import styles from '../../../styles/NextButton.module.scss';

export default function NextButton() {
  return(
    <>
      <button className={`fal fa-chevron-double-down ${styles.nextButton}`}></button>
    </>
  );
}