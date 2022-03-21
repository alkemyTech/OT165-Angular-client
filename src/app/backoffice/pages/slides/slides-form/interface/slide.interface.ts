export interface Slide {
  message: string;
  success: boolean;
  data: Data;
}

export interface Data {
  id: number,
  name: string,
  description: string,
  order: number,
  img: File[],
}

export interface File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
