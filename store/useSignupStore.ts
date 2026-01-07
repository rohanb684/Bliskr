import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type SignupState = {
  email: string
  password: string
  gender: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setGender: (gender: string) => void
}

export const useSignupStore = create<SignupState>()(
  persist(
    (set) => ({
      email: '',
      password: '',
      gender: '',

      setEmail: (email) => set({ email }),
      setPassword: (password) => set({ password }),
      setGender: (gender) => set({ gender }),
    }),
    {
      name: 'signup-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)