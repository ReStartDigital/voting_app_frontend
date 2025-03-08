import { create } from "zustand";

type State = {
  text: string;
  setLogMessage: (message: string) => void;
};

const useChangeState = create<State>((set) => ({
  text: "",
  setLogMessage: (message) => set({ text: message }),
}));

export default useChangeState;
