import { useQuery } from '@tanstack/react-query';
import { extractList } from '@/shared/api/http';
import { fetchVacancies, fetchVacancyDetail } from './api';

export function useVacancies() {
  return useQuery({
    queryKey: ['vacancies'],
    queryFn: async () => extractList(await fetchVacancies()),
  });
}

export function useVacancyDetail(idOrSlug?: string) {
  return useQuery({
    queryKey: ['vacancies', idOrSlug],
    queryFn: () => fetchVacancyDetail(idOrSlug as string),
    enabled: Boolean(idOrSlug),
  });
}
