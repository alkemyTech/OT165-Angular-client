export class Activity {
  id!: number;
  name!: string;
  slug!: string | null;
  description!: string;
  image!: string;
  user_id!: number | null;
  category_id!: number | null;
  created_at!: Date | null | string;
  updated_at!: Date | null | string;
  deleted_at!: Date | null | string;
  group_id!: number;
}
