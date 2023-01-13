import { create } from 'zustand'

interface Store {
  audioState: boolean
  setAudioState: (audioState: boolean) => void
  audioVolume: number
  setAudioVolume: (audioVolume: number) => void
}

export const useStore = create<Store>()(
  (set) => ({
    audioState: false,
    setAudioState: (audioState) => set({ audioState }),
    audioVolume: 0.33,
    setAudioVolume: (audioVolume) => set({ audioVolume }),
  })
)