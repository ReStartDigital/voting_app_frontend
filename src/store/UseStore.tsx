import { create } from "zustand";

interface StoreState {
    initial: boolean;
    toggleState: () => void;
  }

const Usestore = create<StoreState>((set)=>(
    {
    initial: false,
    toggleState: ()=>set((state: any)=>({initial: !state.initial }))
}))


export default Usestore;