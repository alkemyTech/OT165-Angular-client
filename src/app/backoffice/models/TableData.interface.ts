export interface TableData{
    createPath: string,
    editPath: string,
    title: string,
    data: GenericData[]
}

export interface GenericData{
  id?: number,
  name?: string,
  description?: string,
  order?: number,
  image?: string,
  email?: string,
  created_at?: Date,
  slug?:string
  content?:string
  user_id?:number
  category_id?:number;
  updated_at?:Date;
  deleted_at?:Date;
  group_id?: number;
}

export interface Columns{
  field?: string,
  header: string
}
