import { useQuery } from '@tanstack/react-query';
import { extractList } from '@/shared/api/http';
import { fetchTechnologies, fetchTechnologyDetail } from './api';

export function useTechnologies() {
  return useQuery({
    queryKey: ['technologies'],
    queryFn: async () => extractList(await fetchTechnologies()),
  });
}

export function useTechnologyDetail(idOrSlug?: string) {
  return useQuery({
    queryKey: ['technologies', idOrSlug],
    queryFn: () => fetchTechnologyDetail(idOrSlug as string),
    enabled: Boolean(idOrSlug),
  });
}
