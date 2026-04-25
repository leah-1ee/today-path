import { useFilterStore } from '@/store/filterStore';

export function useFilters() {
  return useFilterStore();
}
