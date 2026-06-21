import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiGet, apiGetFromList, type ApiListResponse } from '@/shared/api/http';
import type { Project } from './model';

export function fetchProjects() {
  return apiGet<ApiListResponse<Project>>(ENDPOINTS.projects);
}

export function fetchProjectDetail(idOrSlug: string) {
  return apiGetFromList<Project>(ENDPOINTS.projects, idOrSlug);
}
