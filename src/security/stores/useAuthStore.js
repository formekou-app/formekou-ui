import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));
