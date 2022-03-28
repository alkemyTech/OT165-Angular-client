import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/Category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL = 'https://ongapi.alkemy.org/api/categories'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return <Observable<Category[]>>(
      this.http
        .get(`${environment.BASE_URL_API}categories`)
        .pipe(map((res: any) => {
          return res.data;
        }))
    )
  }

  storeNewCategory(category: any): Observable<Category> {
    return this.http.post<Category>(this.baseURL, category);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`)
  }

  updateCategoryById(id: number, category: any): Observable<Category> {
    return this.http.put<Category>(`${this.baseURL}/${id}`, category);
  }  
}
