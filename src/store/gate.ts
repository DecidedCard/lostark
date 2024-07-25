import { create } from "zustand";

type Store = {
  gate: calendar[];
  setIsland: (arg: calendar) => void;
  setReset: () => void;
};

const useGateStore = create<Store>()((set) => ({
  gate: [],
  setIsland: (arg) => set((item) => ({ gate: [...item.gate, arg] })),
  setReset: () => set(() => ({ gate: [] })),
}));

export default useGateStore;
