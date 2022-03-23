import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/Category';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
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

  getNews(){
    return this.http.get(this.api + "news");
  }

  createNews(news: any){
    return this.http.post(this.api + "news", news);
  }

  updateNews(news: any): Observable<News>{
    return this.http.put<News>(this.api + "news/" + news.id, news);
  }

  getCategories(): Observable<Category>{
    return this.http.get<Category>(this.api + "categories");
  }
}
