export interface Slide {
  name: string;
  description: string;
  order: string;
  img: file[];
}

interface file {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
