import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiGet, apiGetFromList, type ApiListResponse } from '@/shared/api/http';
import type { NewsItem } from './model';

export function fetchNews() {
  return apiGet<ApiListResponse<NewsItem>>(ENDPOINTS.news);
}

export function fetchNewsDetail(idOrSlug: string) {
  return apiGetFromList<NewsItem>(ENDPOINTS.news, idOrSlug);
}
