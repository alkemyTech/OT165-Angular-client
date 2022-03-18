import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-image-curved",
  templateUrl: "./image-curved.component.html",
  styleUrls: ["./image-curved.component.scss"],
})
export class ImageCurvedComponent implements OnInit {
  @Input() url: string = "";
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() textColor: string = "white";
  @Input() opacity: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
