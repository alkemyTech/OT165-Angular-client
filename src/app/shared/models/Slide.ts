export interface Slide {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  order?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  group_id?: number;
}
