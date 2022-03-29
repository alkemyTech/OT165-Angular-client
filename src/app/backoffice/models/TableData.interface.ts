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
  createdAt?: string,
}

export interface Columns{
  field?: string,
  header: string
}