import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiGet, apiGetFromList, type ApiListResponse } from '@/shared/api/http';
import type { Vacancy } from './model';

export function fetchVacancies() {
  return apiGet<ApiListResponse<Vacancy>>(ENDPOINTS.vacancies);
}

export function fetchVacancyDetail(idOrSlug: string) {
  return apiGetFromList<Vacancy>(ENDPOINTS.vacancies, idOrSlug);
}
