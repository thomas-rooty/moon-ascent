import styles from '../../styles/Buttons.module.css';

const StartButton = () => {
  return <div className={styles.start} onClick={() => console.log('Start game!')}>
    <span className={styles.noselect}>Begin the Ascent</span>
  </div>;
}

export default StartButton;