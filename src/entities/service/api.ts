import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiGet, apiGetFromList, type ApiListResponse } from '@/shared/api/http';
import type { Service } from './model';

export function fetchServices() {
  return apiGet<ApiListResponse<Service>>(ENDPOINTS.services);
}

export function fetchServiceDetail(idOrSlug: string) {
  return apiGetFromList<Service>(ENDPOINTS.services, idOrSlug);
}
