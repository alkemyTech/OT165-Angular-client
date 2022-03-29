import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService <S> {

  constructor(private http: HttpClient, @Inject(String) private readonly url: string) { 
    this.url = url;
    this.http = http;
  }

  getAll(): Observable<S[]>{
    return <Observable<S[]>>(
      this.http.get(`${environment.BASE_URL_API}${this.url}`)
      .pipe(map((res: any) => {
        return res.data;
      }))
    );
  }

  getById(id: number): Observable<S> {
    return <Observable<S>>(
      this.http
        .get(`${environment.BASE_URL_API}${this.url}/${id}`)
        .pipe(map((res: any) => {
          return res;
        }))
    );
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.BASE_URL_API}${this.url}/${id}`);
  }

  putById(id: number, object: S): Observable<S>{
    return <Observable<S>>(
      this.http
        .put(`${environment.BASE_URL_API}${this.url}/${id}`, object)
        .pipe(map((res: any) => {
          return res;
        }))
    ) 
  }

  patchById(id: number, object: S): Observable<S> {
    return <Observable<S>>(
      this.http
        .patch(`${environment.BASE_URL_API}${this.url}/${id}`, object)
        .pipe(map((res: any) => {
          return res;
        }))
    )
  }

  post(object: S): Observable<S>{
    return <Observable<S>>(
      this.http
        .post(`${environment.BASE_URL_API}${this.url}`, object)
        .pipe(map((res: any) => {
          return res;
        }))
    )
  }
}
