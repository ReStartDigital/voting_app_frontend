import { create } from "zustand";

const ChangeState = create((set)=>({
    initial: true,
    changeInitial: ()=>set((state: any)=>({initial: !state.initial }))
}))

export default ChangeState;