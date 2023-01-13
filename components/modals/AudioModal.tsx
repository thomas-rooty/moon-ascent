import styles from '../../styles/Modals.module.css'
import {useStore} from "../../store/store";

const AudioModal = () => {
  // Ask user to enable audio or not, and then set the state of the audioState (store) variable to true or false.
  const setAudioState = useStore((state) => state.setAudioState)

  // Function that turns audioModal opacity to 0 by adding the darken class to it, remove it, and then sets audioState to the variable given.
  const handleAudioModal = (audioState: boolean) => {
    const audioModal = document.getElementById('audioModal')
    audioModal?.classList.add(styles.darken)
    setTimeout(() => {
      // Remove the modal from DOM
      audioModal?.remove()
    }, 3000)
    setAudioState(audioState)
  }

  return (
    <div id="audioModal" className={styles.audioModal}>
      <div className={styles.modalContent}>
        <h1>Get the most out of the Ascent by enabling audio</h1>
        <p>Would you like to enable background music ?</p>
        <div className={styles.modalButtons}>
          <button onClick={() => handleAudioModal(true)}>Yes</button>
          <button onClick={() => handleAudioModal(false)}>No</button>
        </div>
      </div>
    </div>
  )
}

export default AudioModal