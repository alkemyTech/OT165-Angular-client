import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-termsandconditions",
  templateUrl: "./termsandconditions.component.html",
  styleUrls: ["./termsandconditions.component.scss"],
})
export class TermsandconditionsComponent implements OnInit {
  @Output() hide = new EventEmitter<boolean>();
  @Output() accept = new EventEmitter<boolean>();

  pdfSrc = "assets/pdf/pdf-test.pdf";

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.hide.emit(true);
  }

  agree() {
    this.accept.emit(true);
    this.hide.emit(true)
  }
}
