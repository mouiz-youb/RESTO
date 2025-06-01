import { create } from 'zustand'

export const useStoreOrder = create((set) => ({
    order: "",
    setOrder: (order) => set({ order }),
    clearorder: () => set({ user: null, token: null }),
}))