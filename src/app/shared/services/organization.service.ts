import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Organization, OrganizationResponse } from '../models/Organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  baseURL = 'https://ongapi.alkemy.org/api/organization'

  constructor(private http: HttpClient) { }

  getOrganization(): Observable<Organization> {
    return this.http.get<OrganizationResponse>(this.baseURL).pipe(map( resp => resp.data))
  }

}