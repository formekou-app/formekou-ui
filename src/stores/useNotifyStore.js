import { create } from "zustand";

const DEFAULT_CONFIG = {
  variant: "ghost",
  color: "gray",
  duration: 2500,
};

export const useNotifyStore = create((set) => ({
  message: "",
  config: DEFAULT_CONFIG,
  setNotify: (message, config) =>
    set((state) => ({
      message,
      config: { ...state.config, ...config },
    })),
}));
