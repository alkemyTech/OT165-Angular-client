import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BaseService<S> {
  constructor(
    private http: HttpClient,
    @Inject(String) private readonly url: string
  ) {
    this.url = url;
    this.http = http;
  }

  getAll(key: string = ''): Observable<S[]> {
    return <Observable<S[]>>this.http.get(`${this.url}?search=${key}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getById(id: number): Observable<S> {
    return <Observable<S>>this.http.get(`${this.url}/${id}`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  putById(id: number, object: S): Observable<S> {
    return <Observable<S>>this.http.put(`${this.url}/${id}`, object).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  patchById(id: number, object: S): Observable<S> {
    return <Observable<S>>this.http.patch(`${this.url}/${id}`, object).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  post(object: S): Observable<S> {
    return <Observable<S>>this.http.post(`${this.url}`, object).pipe(
      map((res: any) => {        
        return res.data;
      })
    );
  }
}
