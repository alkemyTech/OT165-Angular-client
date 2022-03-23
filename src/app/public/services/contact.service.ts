import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
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
  
  sendContactForm(contact: any){
    return this.http.post(this.api + "contacts", contact);
  }
}
