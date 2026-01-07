import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type PreferencesState = {
  photos: string[] 
  addPhoto: (photo: string) => void
  removePhoto: (index: number) => void
  clearPhotos: () => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      photos: [],

      addPhoto: (photo) =>
        set((state) => ({
          photos: state.photos.length < 6 ? [...state.photos, photo] : state.photos,
        })),

      removePhoto: (index) =>
        set((state) => ({
          photos: state.photos.filter((_, i) => i !== index),
        })),

      clearPhotos: () => set({ photos: [] }),
    }),
    {
      name: 'preferences-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
