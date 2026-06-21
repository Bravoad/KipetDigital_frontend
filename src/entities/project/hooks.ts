import { useQuery } from '@tanstack/react-query';
import { extractList } from '@/shared/api/http';
import { fetchProjectDetail, fetchProjects } from './api';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => extractList(await fetchProjects()),
  });
}

export function useProjectDetail(idOrSlug?: string) {
  return useQuery({
    queryKey: ['projects', idOrSlug],
    queryFn: () => fetchProjectDetail(idOrSlug as string),
    enabled: Boolean(idOrSlug),
  });
}
