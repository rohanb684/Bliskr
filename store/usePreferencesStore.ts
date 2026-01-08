import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type PreferencesState = {
  photos: string[] 
  datingPreference:string
  addPhoto: (photo: string) => void
  removePhoto: (index: number) => void
  clearPhotos: () => void
  setDatingPreference:(input:string)=>void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      photos: [],
datingPreference:"",
      addPhoto: (photo) =>
        set((state) => ({
          photos: state.photos.length < 6 ? [...state.photos, photo] : state.photos,
        })),

      removePhoto: (index) =>
        set((state) => ({
          photos: state.photos.filter((_, i) => i !== index),
        })),

      clearPhotos: () => set({ photos: [] }),
      setDatingPreference: (dprf:string) => set({datingPreference:dprf})
    }),
    {
      name: 'preferences-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
