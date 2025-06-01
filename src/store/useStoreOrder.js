import { create } from 'zustand'

const useStoreOrder = create((set) => ({
    order: "",
    setUser: (order) => set({ order }),
    clearorder: () => set({ user: null, token: null }),
}))