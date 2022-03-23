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
  image: string,
}
