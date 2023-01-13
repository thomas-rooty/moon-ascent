import styles from '../../styles/LandingPage.module.css'
import StartButton from "../buttons/StartButton";
import AudioModal from "../modals/AudioModal";
import {useStore} from "../../store/store";
import {useEffect} from "react";

const LandingPage = () => {
  // Get audioState and audioVolume from store
  const audioState = useStore(state => state.audioState)
  const audioVolume = useStore(state => state.audioVolume)

  // Get setAudioVolume from store
  const setAudioVolume = useStore(state => state.setAudioVolume)

  // Play audio on mount
  useEffect(() => {
    if (audioState) {
      // Play audio from audio element
      const audio = document.getElementById('bg-audio') as HTMLAudioElement
      audio.volume = audioVolume
      audio.play()
    }
  }, [audioState, audioVolume])

  return (
    <div className={styles.container}>
      <audio id="bg-audio" src="/musics/The Rising Dawn Bellows Like Thunder.mp3" loop preload="auto"/>
      <audio id="ascent-audio" src="/musics/Man to the Moon.mp3" loop preload="auto"/>
      <AudioModal/>
      <StartButton/>
      <div className={styles.range}>
        <input
          type="range"
          className={styles.volumeSlider}
          min="0"
          max="1"
          step="0.0001"
          value={audioVolume}
          onChange={(e) => setAudioVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}

export default LandingPage