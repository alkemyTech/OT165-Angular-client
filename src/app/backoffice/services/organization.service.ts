import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../entity/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
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

  getOrganization(){
    return this.http.get(this.api + "organization");
  }

  updateWelcomeTextOfOrganization(organization: any){    
    return this.http.put(this.api + "organization/" + organization.id, organization);
  }
}
