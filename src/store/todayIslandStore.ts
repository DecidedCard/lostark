import { create } from "zustand";

import { calendar } from "@/types/calendar";

type Store = {
  todayIsland: calendar[];
  setTodayIsland: (arg: calendar) => void;
  setReset: () => void;
};

const useTodayIslandStore = create<Store>()((set) => ({
  todayIsland: [],
  setTodayIsland: (arg) =>
    set((item) => ({ todayIsland: [...item.todayIsland, arg] })),
  setReset: () => set(() => ({ todayIsland: [] })),
}));

export default useTodayIslandStore;
