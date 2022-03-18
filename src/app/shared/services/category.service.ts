import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL = 'https://ongapi.alkemy.org/api/categories'

  constructor(private http: HttpClient) { }

  storeNewCategory(category: any): Observable<Category> {
    return this.http.post<Category>(this.baseURL, category);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseURL}/${id}`)
  }

  updateCategoryById(id: number, category: any): Observable<Category> {
    return this.http.put<Category>(`${this.baseURL}/${id}`, category);
  }
}
