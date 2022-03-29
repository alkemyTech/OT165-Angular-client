import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide, SlideResponse } from "../models/slide.interface";
import { BaseService } from 'src/app/services/base.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SlideService extends BaseService<any> {

  constructor(http:HttpClient) {
    super(http, 'slides');
  }

  public getSingleSlide(id: number): Observable<SlideResponse>{
    return this.getById(id);
  }

  public createSlides(slide: Slide): Observable<SlideResponse>{
    return this.post(slide);
  }

  public upDateSlides(id: number, slide: Slide): Observable<SlideResponse>{
    return this.putById(id, slide)
  }

  public getAllSildes(skip?: number, limit?: number): Observable<Slide[]>{
    return this.getAll();
  }

  public deleteSlide(id: number): Observable<any>{
    return this.deleteById(id);
  }
  
  public getListOfSlides(){
    return this.getAll();
  }

  public updateOrderOfSlide(slide: any){                
    return this.putById(slide.id, slide)
  }
}
