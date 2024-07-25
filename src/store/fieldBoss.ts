import { create } from "zustand";

type Store = {
  fieldBoss: calendar[];
  setFieldBoss: (arg: calendar) => void;
  setReset: () => void;
};

const useFieldBossStore = create<Store>()((set) => ({
  fieldBoss: [],
  setFieldBoss: (arg) =>
    set((item) => ({ fieldBoss: [...item.fieldBoss, arg] })),
  setReset: () => set(() => ({ fieldBoss: [] })),
}));

export default useFieldBossStore;
