import { Component, Input } from "@angular/core";
import { News } from "src/app/backoffice/models/news";

@Component({
  selector: "app-listnews",
  templateUrl: "./listnews.component.html",
  styleUrls: ["./listnews.component.scss"],
})
export class ListnewsComponent {
  @Input() news!: News

  constructor() {}
}
