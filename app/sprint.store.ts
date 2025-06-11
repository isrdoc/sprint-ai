import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SprintStore {
  isTrainingModalOpen: boolean;
  openTrainingModal: () => void;
  closeTrainingModal: () => void;
}

export const useSprintStore = create<SprintStore>()(
  persist(
    (set) => ({
      isTrainingModalOpen: false,
      openTrainingModal: () => set({ isTrainingModalOpen: true }),
      closeTrainingModal: () => set({ isTrainingModalOpen: false }),
    }),
    {
      name: "sprint-storage",
    }
  )
);
