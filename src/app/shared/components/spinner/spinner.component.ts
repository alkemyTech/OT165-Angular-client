import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spinner",
  template: ` <div class="wrapper">
    <p-progressSpinner
      class="spinner custom-spinner"
      strokeWidth="4"
      fill="var(--surface-ground)"
      animationDuration=".5s"
    ></p-progressSpinner>
  </div>`,
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
