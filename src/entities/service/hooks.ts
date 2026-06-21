import { useQuery } from '@tanstack/react-query';
import { extractList } from '@/shared/api/http';
import { fetchServiceDetail, fetchServices } from './api';

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => extractList(await fetchServices()),
  });
}

export function useServiceDetail(idOrSlug?: string) {
  return useQuery({
    queryKey: ['services', idOrSlug],
    queryFn: () => fetchServiceDetail(idOrSlug as string),
    enabled: Boolean(idOrSlug),
  });
}
