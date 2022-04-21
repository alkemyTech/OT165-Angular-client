import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-search",
  templateUrl: "./input-search.component.html",
  styleUrls: ["./input-search.component.scss"],
})
export class InputSearchComponent implements OnInit {
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public search(inputSearch: any) {
    this.searched.emit(inputSearch);
  }
}
