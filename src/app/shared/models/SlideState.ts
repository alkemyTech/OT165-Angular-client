import { Slide } from "../../backoffice/models/slide.interface";

export interface SlideState {
  loading: boolean;
  slides: Slide[];
}