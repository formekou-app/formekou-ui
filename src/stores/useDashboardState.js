import { create } from "zustand";

export const useDashboardState = create((set) => ({
  isLoading: false,
  setIsLoading: (newValue) => set(state => ({...state, isLoading: newValue }))
}));
