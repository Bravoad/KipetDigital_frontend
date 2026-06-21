import { useQuery } from '@tanstack/react-query';
import { extractList } from '@/shared/api/http';
import { fetchNews, fetchNewsDetail } from './api';

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => extractList(await fetchNews()),
  });
}

export function useNewsDetail(idOrSlug?: string) {
  return useQuery({
    queryKey: ['news', idOrSlug],
    queryFn: () => fetchNewsDetail(idOrSlug as string),
    enabled: Boolean(idOrSlug),
  });
}
