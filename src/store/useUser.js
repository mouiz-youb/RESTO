import { create } from 'zustand'

const useUser = create((set) => ({
  user: "",
  token: null,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    clearUser: () => set({ user: null, token: null }),
}))