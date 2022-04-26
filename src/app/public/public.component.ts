import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject } from "@angular/core";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"],
})
export class PublicComponent {
  public showButton = false;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > 500
    ) {
      this.showButton = true;
    } else if (
      this.showButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < 500
    ) {
      this.showButton = false;
    }
  }

  onScrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
