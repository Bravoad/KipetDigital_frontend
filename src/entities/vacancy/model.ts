import type { BaseContentEntity } from '@/shared/types/content';

export interface Vacancy extends BaseContentEntity {
  salary?: string | number | null;
  employment_type?: string | null;
  location?: string | null;
  requirements?: string | null;
}
