import { env } from '@/shared/config/env';
import type { BaseContentEntity } from '@/shared/types/content';

export function getEntityTitle(entity: BaseContentEntity): string {
  return entity.title || entity.name || 'Без названия';
}

export function getEntitySummary(entity: BaseContentEntity): string {
  return entity.short_description || entity.subtitle || entity.description || entity.text || entity.content || '';
}

export function getEntityBody(entity: BaseContentEntity): string {
  return entity.description || entity.text || entity.content || entity.short_description || '';
}

export function getEntityImage(entity: BaseContentEntity): string | null {
  const image = entity.image || entity.preview_image;

  if (!image) {
    return null;
  }

  if (/^https?:\/\//.test(image)) {
    return image;
  }

  const backendOrigin = env.apiBaseUrl.replace(/\/api\/?$/, '');
  return `${backendOrigin}${image.startsWith('/') ? image : `/${image}`}`;
}

export function getEntityUrlId(entity: BaseContentEntity): string {
  return String(entity.slug || entity.id);
}

export function truncateText(value: string, limit = 180): string {
  const normalized = value.replace(/\s+/g, ' ').trim();

  if (normalized.length <= limit) {
    return normalized;
  }

  return `${normalized.slice(0, limit).trim()}...`;
}
