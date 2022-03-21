import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../../../../environments/environment";
import { Slide, Data } from '../interface/slide.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceSlide {

  BASE_URL: string = environment.BASE_URL_API

  constructor(private http: HttpClient) { }

  public createSlides(slide: Data): Observable<Slide>{
    return this.http.post<Slide>(`${this.BASE_URL}slides`, slide)
  }

  public upDateSlides(slide: Data): Observable<Slide>{
    return this.http.post<Slide>(`${this.BASE_URL}slides/${slide.id}`, slide)
  }

}
