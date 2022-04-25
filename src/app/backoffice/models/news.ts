export interface News {
  id:number; 
  name:string;
  slug?:string
  content:string
  image:string
  user_id?:number
  category_id?:number;
  created_at?:Date;
  updated_at?:Date;
  deleted_at?:Date;
  group_id?: number;
}