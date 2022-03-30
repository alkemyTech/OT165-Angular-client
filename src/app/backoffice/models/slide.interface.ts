export interface SlideResponse {
  message: string;
  success: boolean;
  data: Slide;
}

export interface Slide {
  id: number,
  name: string,
  description: string,
  order: number,
  image: string,
}

export interface AllSlides {
  message: string;
  success: boolean;
  data: Slide[];
}
