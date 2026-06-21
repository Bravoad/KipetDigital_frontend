import type { BaseContentEntity } from '@/shared/types/content';

export interface NewsItem extends BaseContentEntity {
  published_at?: string | null;
  author?: string | null;
}
