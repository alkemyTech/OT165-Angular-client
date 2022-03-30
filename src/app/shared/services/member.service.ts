import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  baseURL = "https://ongapi.alkemy.org/api/members";

  constructor(private http: HttpClient) {}

  getMembers(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}`);
  }
}
