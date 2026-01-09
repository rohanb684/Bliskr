import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type FantasiesType = {
  sensory: string
  power: string
  scenarios: string
  experience: string
}

type PreferencesState = {
  photos: string[] 
  datingPreference: string
  relationshipStatus: string
  aboutText: string
  interests: string[]
  height: string
  bodyType: string
  hasChildren: string
  religiousBeliefs: string
  drinking: string
  smoking: string
  drugs: string
  relationshipType: string
  intoPreferences: string
  fantasies: FantasiesType
  addPhoto: (photo: string) => void
  removePhoto: (index: number) => void
  clearPhotos: () => void
  setDatingPreference: (input: string) => void
  setRelationshipStatus: (input: string) => void
  setAboutText: (input: string) => void
  addInterest: (interest: string) => void
  removeInterest: (interest: string) => void
  setHeight: (input: string) => void
  setBodyType: (input: string) => void
  setHasChildren: (input: string) => void
  setReligiousBeliefs: (input: string) => void
  setDrinking: (input: string) => void
  setSmoking: (input: string) => void
  setDrugs: (input: string) => void
  setRelationshipType: (input: string) => void
  setIntoPreferences: (input: string) => void
  setFantasy: (category: string, value: string) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      photos: [],
      datingPreference: "",
      relationshipStatus: "",
      aboutText: "",
      interests: [],
      height: "",
      bodyType: "",
      hasChildren: "",
      religiousBeliefs: "",
      drinking: "",
      smoking: "",
      drugs: "",
      relationshipType: "",
      intoPreferences: "",
      fantasies: {
        sensory: "",
        power: "",
        scenarios: "",
        experience: "",
      },

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
      
      addInterest: (interest: string) =>
        set((state) => ({
          interests: state.interests.includes(interest)
            ? state.interests
            : [...state.interests, interest],
        })),

      removeInterest: (interest: string) =>
        set((state) => ({
          interests: state.interests.filter((i) => i !== interest),
        })),

      setHeight: (height: string) => set({ height }),
      setBodyType: (bodyType: string) => set({ bodyType }),
      setHasChildren: (hasChildren: string) => set({ hasChildren }),
      setReligiousBeliefs: (religiousBeliefs: string) => set({ religiousBeliefs }),
      setDrinking: (drinking: string) => set({ drinking }),
      setSmoking: (smoking: string) => set({ smoking }),
      setDrugs: (drugs: string) => set({ drugs }),
      setRelationshipType: (relationshipType: string) => set({ relationshipType }),
      setIntoPreferences: (intoPreferences: string) => set({ intoPreferences }),
      setFantasy: (category: string, value: string) =>
        set((state) => ({
          fantasies: { ...state.fantasies, [category]: value },
        })),
    }),
    {
      name: 'preferences-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
