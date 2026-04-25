export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  distance: number;
  duration: number;
  difficulty: 'easy' | 'moderate' | 'hard';
  path: Coordinate[];
  score: number;
}
