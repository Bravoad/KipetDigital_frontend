import type { BaseContentEntity } from '@/shared/types/content';

export interface Service extends BaseContentEntity {
  price_from?: string | number | null;
  duration?: string | null;
}
