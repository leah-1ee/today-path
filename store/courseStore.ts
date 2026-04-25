import { create } from 'zustand';
import type { Course } from '@/types/course';

interface CourseStore {
  courses: Course[];
  selectedCourse: Course | null;
  setCourses: (courses: Course[]) => void;
  selectCourse: (course: Course | null) => void;
}

export const useCourseStore = create<CourseStore>(set => ({
  courses: [],
  selectedCourse: null,
  setCourses: courses => set({ courses }),
  selectCourse: selectedCourse => set({ selectedCourse }),
}));
