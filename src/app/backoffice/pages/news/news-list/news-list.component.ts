import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { News } from 'src/app/backoffice/models/news';
import { Columns, TableData } from 'src/app/backoffice/models/TableData.interface';
import { NewsService } from 'src/app/backoffice/services/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news!: News[];
  isLoading!: boolean;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "created_at", header: "Creado" },
  ];
  tableNews: TableData = {
    createPath: "/backoffice/actividades/crear/",
    editPath: "/backoffice/actividades/editar/",
    title: "Novedades",
    data: []
  };

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.newsService.getAllNews().subscribe((news: News[]) => {
      this.refreshData(news)
    })
    this.isLoading = false;
  }

  refreshData(data: News[]) {
    this.tableNews = {...this.tableNews, data: data};
  }

  // deleteActivity(event: number) {
  //   this.store.dispatch(deleteActivity({ id: event }));
  // }

  // debounce(key: string) {
  //   this.subject.next(key);
  // }

  // filter(e: string) {
  //   if (e.length > 2) {
  //     this.store.dispatch(getSpecificActivities({ key: e }));
  //   } else {
  //     this.store.dispatch(getActivities());
  //   }
  // }

}
