import styles from '../../styles/Buttons.module.css';
import {useStore} from "../../store/store";
import {useEffect} from "react";

const StartButton = () => {
  // Get audioState, setStartedJourney from store
  const audioState = useStore(state => state.audioState)
  const audioVolume = useStore(state => state.audioVolume)
  const startedJourney = useStore(state => state.startedJourney)
  const setStartedJourney = useStore(state => state.setStartedJourney)

  // Start the journey
  useEffect(() => {
    if (startedJourney) {
      console.log('Started Journey')
      if (audioState) {
        // Fade out progressively active background music from element called bg-audio
        const audio = document.getElementById('bg-audio') as HTMLAudioElement
        const fadeAudio = setInterval(() => {
          if (audio.volume > 0.1) {
            audio.volume -= 0.1
          } else {
            audio.pause()
            clearInterval(fadeAudio)
          }
        }, 100)

        // Play audio from element called ascent-audio
        const ascentAudio = document.getElementById('ascent-audio') as HTMLAudioElement
        ascentAudio.volume = audioVolume
        ascentAudio.play()
      }
    }
  }, [audioState, audioVolume, startedJourney])

  return <div className={styles.start} onClick={() => setStartedJourney(true)}>
    <span className={styles.noselect}>Begin the Ascent</span>
  </div>;
}

export default StartButton;