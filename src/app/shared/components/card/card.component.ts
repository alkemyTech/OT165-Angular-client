import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() imageSrc: string = "../../../../assets/images/image-not-found.png";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() navigateTo!: string;

  constructor(private router: Router) {
    this.navigateTo = this.router.url;
  }

  errorImageSrc() {
    this.imageSrc = "../../../../assets/images/image-not-found2.png";
  }
}