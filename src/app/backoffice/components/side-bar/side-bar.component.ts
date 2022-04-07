import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {

  @Input() itemsList!: any[]

  constructor() {}

  ngOnInit(): void {
    
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");

    closeBtn?.addEventListener("click", () => {
      sidebar?.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });

    searchBtn?.addEventListener("click", () => {
      // Sidebar open when you click on the search icon
      sidebar?.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });

    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar?.classList.contains("open")) {
        closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
      } else {
        closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
      }
    }
  }
}
