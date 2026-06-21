export type EntityId = string | number;

export interface BaseContentEntity {
  id: EntityId;
  slug?: string | null;
  title?: string | null;
  name?: string | null;
  subtitle?: string | null;
  description?: string | null;
  short_description?: string | null;
  text?: string | null;
  content?: string | null;
  image?: string | null;
  preview_image?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}
