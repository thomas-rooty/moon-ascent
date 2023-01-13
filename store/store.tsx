import { create } from 'zustand'

interface Store {
  audioState: boolean
  setAudioState: (audioState: boolean) => void
}

export const useStore = create<Store>()(
  (set) => ({
    audioState: false,
    setAudioState: (audioState) => set({ audioState }),
  })
)