import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/backoffice/models/news';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<News> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_NEWS);
  }

  public getAllNews(): Observable<News[]> {
    return super.getAll();
  }

  public getNews(id: number): Observable<News> {
    return super.getById(id);
  }

  public createNews(news: any): Observable<News> {
    return super.post(news);
  }

  public updateNews(id: number, news: any): Observable<News> {
    return super.putById(id, news);
  }

  public deleteNews(id: number): Observable<any> {
    return super.deleteById(id);
  }
}