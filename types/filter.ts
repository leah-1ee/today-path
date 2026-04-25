export type Duration = 30 | 60 | 90 | 120;
export type Companion = 'alone' | 'partner' | 'family' | 'pet';
export type Difficulty = 'easy' | 'moderate' | 'hard';

export interface FilterState {
  duration: Duration | null;
  companion: Companion | null;
  difficulty: Difficulty | null;
}
