import type { BaseContentEntity } from '@/shared/types/content';

export interface Project extends BaseContentEntity {
  client?: string | null;
  industry?: string | null;
  result?: string | null;
  link?: string | null;
}
