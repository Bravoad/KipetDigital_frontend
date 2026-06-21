import { env } from '@/shared/config/env';
import { ApiError } from './errors';

export type ApiListResponse<T> = T[] | {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: T[];
};

type RequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean | null | undefined>;
};

function buildUrl(path: string, query?: RequestOptions['query']): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const origin = globalThis.location?.origin ?? 'http://localhost';
  const url = new URL(`${env.apiBaseUrl}${normalizedPath}`, origin);

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

async function parseJsonSafely(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('application/json')) {
    return null;
  }

  return response.json();
}

function extractErrorMessage(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== 'object') {
    return fallback;
  }

  const data = payload as Record<string, unknown>;

  if (typeof data.detail === 'string') {
    return data.detail;
  }

  if (typeof data.message === 'string') {
    return data.message;
  }

  const firstFieldError = Object.values(data).find((value) => Array.isArray(value) || typeof value === 'string');

  if (Array.isArray(firstFieldError)) {
    return firstFieldError.join(' ');
  }

  if (typeof firstFieldError === 'string') {
    return firstFieldError;
  }

  return fallback;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { query, headers, body, ...requestOptions } = options;
  const response = await fetch(buildUrl(path, query), {
    ...requestOptions,
    headers: {
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body,
  });

  const payload = await parseJsonSafely(response);

  if (!response.ok) {
    throw new ApiError(
      extractErrorMessage(payload, `Ошибка API: ${response.status}`),
      response.status,
      payload,
    );
  }

  return payload as T;
}

export async function apiGet<T>(path: string, query?: RequestOptions['query']): Promise<T> {
  return apiRequest<T>(path, { method: 'GET', query });
}

export async function apiPost<TResponse, TPayload extends object>(path: string, payload: TPayload): Promise<TResponse> {
  return apiRequest<TResponse>(path, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function extractList<T>(response: ApiListResponse<T>): T[] {
  if (Array.isArray(response)) {
    return response;
  }

  return response.results ?? [];
}

type EntityWithUrlId = {
  id: string | number;
  slug?: string | null;
};

export async function apiGetFromList<T extends EntityWithUrlId>(
  collectionEndpoint: string,
  idOrSlug: string,
): Promise<T> {
  const response = await apiGet<ApiListResponse<T>>(collectionEndpoint);
  const item = extractList(response).find((entry) => (
    String(entry.id) === idOrSlug || Boolean(entry.slug && String(entry.slug) === idOrSlug)
  ));

  if (!item) {
    throw new ApiError('Запись не найдена', 404, response);
  }

  return item;
}
