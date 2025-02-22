import { create } from "zustand";

interface TextStore {
  text: string;
  setText: (newText: string) => void;

}

export const useTextStore = create<TextStore>((set) => ({
  text: "Enter email used when creating your account.",
  setText: (newText) => set({ text: newText }),
 
}));

export default useTextStore;