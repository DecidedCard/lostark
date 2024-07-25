import { create } from "zustand";

type Store = {
  island: calendar[];
  setIsland: (arg: calendar) => void;
  setReset: () => void;
};

const useIslandStore = create<Store>()((set) => ({
  island: [],
  setIsland: (arg) => set((item) => ({ island: [...item.island, arg] })),
  setReset: () => set(() => ({ island: [] })),
}));

export default useIslandStore;
