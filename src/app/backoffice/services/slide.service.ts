import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Slide } from '../models/slide';
import { Slide, Data } from "../models/slide.interface";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private BASE_URL: string = environment.BASE_URL_API
  private _groupId!: string;
  private _headers!: HttpHeaders;

  constructor(private http:HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }

  public getSingleSlide(id: number): Observable<Slide>{
    return this.http.get<Slide>(`${this.BASE_URL}slides/${id}`)
  }

  public createSlides(slide: Data): Observable<Slide>{
    return this.http.post<Slide>(`${this.BASE_URL}slides`, slide)
  }

  public upDateSlides(id: number, slide: Data): Observable<Slide>{
    return this.http.put<Slide>(`${this.BASE_URL}slides/${id}`, slide)
  }
  
  getListOfSlides(){
    return this.http.get(this.BASE_URL + "slides");
  }

  updateOrderOfSlide(slide: any){                
    return this.http.put(this.BASE_URL + "slides/" + slide.id, slide);
  }
}
