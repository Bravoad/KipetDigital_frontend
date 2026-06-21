import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiGet, apiGetFromList, type ApiListResponse } from '@/shared/api/http';
import type { Technology } from './model';

export function fetchTechnologies() {
  return apiGet<ApiListResponse<Technology>>(ENDPOINTS.technologies);
}

export function fetchTechnologyDetail(idOrSlug: string) {
  return apiGetFromList<Technology>(ENDPOINTS.technologies, idOrSlug);
}
