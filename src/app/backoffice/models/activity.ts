export class Activity {
  id!: number;
  name!: string;
  slug!: string | undefined;
  description!: string;
  image!: string;
  user_id!: number | undefined;
  category_id!: number | undefined;
  created_at!: Date | undefined ;
  updated_at!: Date | undefined ;
  deleted_at!: Date | undefined ;
  group_id!: number;
}
