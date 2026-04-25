import { create } from 'zustand';
import type { FilterState, Duration, Companion, Difficulty } from '@/types/filter';

interface FilterStore extends FilterState {
  setDuration: (duration: Duration | null) => void;
  setCompanion: (companion: Companion | null) => void;
  setDifficulty: (difficulty: Difficulty | null) => void;
  reset: () => void;
}

const initialState: FilterState = {
  duration: null,
  companion: null,
  difficulty: null,
};

export const useFilterStore = create<FilterStore>(set => ({
  ...initialState,
  setDuration: duration => set({ duration }),
  setCompanion: companion => set({ companion }),
  setDifficulty: difficulty => set({ difficulty }),
  reset: () => set(initialState),
}));
