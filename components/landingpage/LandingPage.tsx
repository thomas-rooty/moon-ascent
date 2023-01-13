import styles from '../../styles/LandingPage.module.css'
import StartButton from "../buttons/StartButton";
import AudioModal from "../modals/AudioModal";
import {useStore} from "../../store/store";
import {useEffect} from "react";

const LandingPage = () => {
  // Get audioState
  const audioState = useStore(state => state.audioState)

  // Play audio at 50% volume
  useEffect(() => {
    if (audioState) {
      const audio = new Audio('/musics/The Rising Dawn Bellows Like Thunder.mp3')
      audio.volume = 0.5
      audio.play()
    }
  }, [audioState])

  return (
    <div className={styles.container}>
      <AudioModal />
      <StartButton />
    </div>
  )
}

export default LandingPage