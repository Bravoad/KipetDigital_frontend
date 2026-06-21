import type { BaseContentEntity } from '@/shared/types/content';

export interface Technology extends BaseContentEntity {
  category?: string | null;
}
