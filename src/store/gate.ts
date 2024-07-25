import { create } from "zustand";

import type { calendar } from "@/types/calendar";

type Store = {
  gate: calendar[];
  setGate: (arg: calendar) => void;
  setReset: () => void;
};

const useGateStore = create<Store>()((set) => ({
  gate: [],
  setGate: (arg) => set((item) => ({ gate: [...item.gate, arg] })),
  setReset: () => set(() => ({ gate: [] })),
}));

export default useGateStore;
