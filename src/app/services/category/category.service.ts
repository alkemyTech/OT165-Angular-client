import { environment } from 'src/environments/environment';
import { BaseService } from './../base.service';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/shared/models/Category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService<Category> {
  constructor(http: HttpClient) {
    super(http, `${environment.API_URL_CATEGORIES}`);
  }
  getCategories(key: string = ''): Observable<Category[]> {
    return super.getAll(key);
  }
}
