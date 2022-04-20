import { Component, OnInit } from "@angular/core";
import { News } from "src/app/backoffice/models/news";
import { NewsService } from "src/app/backoffice/services/news/news.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";

@Component({
  selector: "app-listnews",
  templateUrl: "./listnews.component.html",
  styleUrls: ["./listnews.component.scss"],
})
export class ListnewsComponent implements OnInit {
  public news!: News[]
  constructor(private newService: NewsService,
              private dialogService: DialogService) {}

  ngOnInit(): void {
    this.newService.getAll().subscribe(res =>{
      this.news = res      
    },
    () => {
      this.dialogService.add({
        type: "error",
        title: "Contenido no encontrado",
        detail: "Ocurrió un error al cargar las novedades.",
      });
    })
  }
}
