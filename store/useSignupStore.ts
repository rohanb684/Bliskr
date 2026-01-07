import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 1. Define the "Shape" of your data
type SignupState = {
  email: string
  password: string
  // Actions (Functions to update the state)
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

// 2. Create the store
export const useSignupStore = create<SignupState>()(
  persist(
    (set) => ({
      // Initial Data
      email: '',
      password: '',

      // Functions to update data
      setEmail: (email) => set({ email }), // Update email only
      setPassword: (password) => set({ password }), // Update password only
    }),
    {
      name: 'signup-storage', // The key name in localStorage
      storage: createJSONStorage(() => localStorage), // Save to browser storage
    }
  )
)