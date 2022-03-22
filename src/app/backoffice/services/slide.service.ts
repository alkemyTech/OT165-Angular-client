import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private _groupId!: string;
  private _headers!: HttpHeaders;
  api!:string;

  constructor(private http:HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this.api = "https://ongapi.alkemy.org/api/";
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }
  
  getListOfSlides(){
    return this.http.get(this.api + "slides");
  }

  updateOrderOfSlide(slide: any){                
    return this.http.put(this.api + "slides/" + slide.id, slide);
  }
}
