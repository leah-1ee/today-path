import type { Duration, Companion, Difficulty } from '@/types/filter';

export const DURATION_OPTIONS: { label: string; value: Duration }[] = [
  { label: '30분', value: 30 },
  { label: '1시간', value: 60 },
  { label: '1시간 30분', value: 90 },
  { label: '2시간', value: 120 },
];

export const COMPANION_OPTIONS: { label: string; value: Companion }[] = [
  { label: '혼자', value: 'alone' },
  { label: '연인', value: 'partner' },
  { label: '가족', value: 'family' },
  { label: '반려동물', value: 'pet' },
];

export const DIFFICULTY_OPTIONS: { label: string; value: Difficulty }[] = [
  { label: '쉬움', value: 'easy' },
  { label: '보통', value: 'moderate' },
  { label: '어려움', value: 'hard' },
];
