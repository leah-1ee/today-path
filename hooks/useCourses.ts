import { useState } from 'react';
import type { Course } from '@/types/course';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return { courses, loading, error, setCourses, setLoading, setError };
}
