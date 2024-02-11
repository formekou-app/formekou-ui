import { create } from "zustand";

//TODO: migrate all create form context here
export const useCreateFormStore = create((set) => ({
  quetions: [],
  config: {
    title: "",
    description: "",
    isPrivate: false,
    color: "",
    open: "",
    close: ""
  },
  setConfig: (source, value) = set(state => ({ ...state.config, [source]: value }))
}));
