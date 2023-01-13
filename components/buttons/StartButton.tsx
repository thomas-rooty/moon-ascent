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
      // Add hide class to the start button and volumeSlider and remove them from the DOM after .5 second
      document.getElementsByClassName(styles.start)[0].classList.add(styles.hide)
      // @ts-ignore
      document.getElementById('volumeRange').classList.add(styles.hide)
      setTimeout(() => {
        document.getElementsByClassName(styles.start)[0].remove()
        // @ts-ignore
        document.getElementById('volumeRange').remove()
      }, 1000)

      // Music handler
      if (audioState) {
        // Fade out progressively active background music from element called bg-audio
        const bgAudio = document.getElementById('bg-audio') as HTMLAudioElement
        const fadeAudio = setInterval(() => {
          if (bgAudio.volume > 0.05) {
            bgAudio.volume -= 0.01
          } else {
            bgAudio.pause()
            clearInterval(fadeAudio)
            // Play audio from element called ascent-audio
            const ascentAudio = document.getElementById('ascent-audio') as HTMLAudioElement
            ascentAudio.volume = audioVolume
            ascentAudio.play()
          }
        }, 100)
      }
    }
  }, [audioState, audioVolume, startedJourney])

  return <div className={styles.start} onClick={() => setStartedJourney(true)}>
    <span className={styles.noselect}>Begin the Ascent</span>
  </div>;
}

export default StartButton;