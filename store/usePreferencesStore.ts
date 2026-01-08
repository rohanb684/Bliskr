import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type PreferencesState = {
  photos: string[] 
  datingPreference: string
  relationshipStatus: string
  aboutText: string
  addPhoto: (photo: string) => void
  removePhoto: (index: number) => void
  clearPhotos: () => void
  setDatingPreference: (input: string) => void
  setRelationshipStatus: (input: string) => void
  setAboutText: (input: string) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      photos: [],
      datingPreference: "",
      relationshipStatus: "",
      aboutText: "",

      addPhoto: (photo) =>
        set((state) => ({
          photos: state.photos.length < 6 ? [...state.photos, photo] : state.photos,
        })),

      removePhoto: (index) =>
        set((state) => ({
          photos: state.photos.filter((_, i) => i !== index),
        })),

      clearPhotos: () => set({ photos: [] }),
      setDatingPreference: (dprf: string) => set({ datingPreference: dprf }),
      setRelationshipStatus: (dprf: string) => set({ relationshipStatus: dprf }),
      setAboutText: (text: string) => set({ aboutText: text }),
    }),
    {
      name: 'preferences-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

