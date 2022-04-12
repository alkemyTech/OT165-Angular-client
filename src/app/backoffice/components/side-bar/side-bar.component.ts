import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {
  @Input() itemsList!: any[];
  isOpen: boolean = false;

  constructor() {}

  menuBtnChange() {
    this.isOpen = !this.isOpen;
  }
}
