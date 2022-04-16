import { Component, Input } from "@angular/core";
import {
  Columns,
} from "src/app/backoffice/models/TableData.interface";

@Component({
  selector: "app-skeleton",
  templateUrl: "./skeleton.component.html",
  styleUrls: ["./skeleton.component.scss"],
  providers: [],
})
export class SkeletonComponent {
  @Input() columns!: Columns[];

  constructor() {}
}
