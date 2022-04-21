import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-image-curved",
  templateUrl: "./image-curved.component.html",
  styleUrls: ["./image-curved.component.scss"],
  // encapsulation: ViewEncapsulation.None,
})
export class ImageCurvedComponent {
  @Input() url: string = "";
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() textColor: string = "white";
  @Input() opacity: number = 0;

  constructor() {}

}
