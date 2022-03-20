import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Slide } from "./interface/slide.interface";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  @Input() slide!: Slide;
  public title: string = "";
  public edit: boolean = false;

  datos = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    description: ["", [Validators.required, Validators.minLength(6)]],
    order: ["", [Validators.required]],
    img: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.slide) {
      this.datos.controls["name"].setValue(this.slide.name);
      this.datos.controls["description"].setValue(this.slide.description);
      this.datos.controls["order"].setValue(this.slide.order);
      this.datos.controls["img"].setValue(this.slide.img);
      this.edit = true;
      this.title = "Editar";
    } else {
      this.title = "Crear";
    }
  }
  myUploader(event: Event) {
    console.log(event);
  }
}
