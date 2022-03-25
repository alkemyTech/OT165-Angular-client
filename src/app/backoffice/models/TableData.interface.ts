export interface TableData{
    path: string,
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
  createdAt?: string,
}