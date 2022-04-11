import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {

  @Input() itemsList!: any[]

  constructor() {}

  menuBtnChange() {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar?.classList.contains("open")) {
      sidebar?.classList.remove("open");
    } else {
      sidebar?.classList.toggle("open");
    }
  }
}
