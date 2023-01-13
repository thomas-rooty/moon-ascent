import styles from '../../styles/Modals.module.css'
import {useStore} from "../../store/store";

const AudioModal = () => {
  // Ask user to enable audio or not, and then set the state of the audioState (store) variable to true or false.
  const setAudioState = useStore((state) => state.setAudioState)
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>Enable Audio?</h1>
        <p>Would you like to enable audio?</p>
        <div className={styles.modalButtons}>
          <button onClick={() => setAudioState(true)}>Yes</button>
          <button onClick={() => setAudioState(false)}>No</button>
        </div>
      </div>
    </div>
  )
}

export default AudioModal