import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Slide } from "./interface/slide.interface";
import { ServiceSlide } from "./service/service-slide.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  @Input() slide!: Slide;
  public title: string = "";
  public edit: boolean = false;

  /* Modal */
  public display: boolean = false;
  public textModal: string = "";
  public header: string = "";
  public stateRes: boolean = false;

  /* imgs */
  uploadedFile: any = null;

  datos = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    description: ["", [Validators.required, Validators.minLength(6)]],
    order: ["", [Validators.required]],
    image: ["", [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private slideService: ServiceSlide,
    public location: Location
  ) {}

  ngOnInit(): void {
    if (this.slide) {
      this.datos.controls["name"].setValue(this.slide.data.name);
      this.datos.controls["description"].setValue(this.slide.data.description);
      this.datos.controls["order"].setValue(this.slide.data.order);
      this.datos.controls["image"].setValue(this.slide.data.image);
      this.edit = true;
      this.title = "Editar";
    } else {
      this.title = "Crear";
    }
  }

  public myUploader(event: Event) {
    this.onUpload(event);
  }

  public editSlide() {
    this.slideService.upDateSlides(this.datos.value).subscribe(
      (res) => {
        if (res.success) {
          this.stateRes = true;
          this.header = "Listo!";
          this.textModal = "¡Has editado un Slide!";
          this.showModalDialog();
        }
      },
      (error) => {
        this.stateRes = false;
        this.header = "Error";
        this.textModal = "Ha ocurrido un error, vuelve a intentarlo";
        this.showModalDialog();
      }
    );
  }

  public createSlide() {
    this.slideService.createSlides(this.datos.value).subscribe(
      (res) => {
        if (res.success) {
          this.stateRes = true;
          this.header = "Listo!";
          this.textModal = "¡Has creado un nuevo Slide!";
          this.showModalDialog();
        }
      },
      (error) => {
        this.stateRes = false;
        this.header = "Error";
        this.textModal = "Ha ocurrido un error, vuelve a intentarlo";
        this.showModalDialog();
      }
    );
  }

  public modalDismiss(state: boolean) {
    this.display = false;
    if (state) {
      this.location.back();
    }
  }

  public showModalDialog() {
    this.display = true;
  }

  // onClick upload button convert image file to base64 string
  private onUpload(event: any) {
    let file = event.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  // set base64 string to image field at formulary
  private _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.uploadedFile = reader.result;
    this.datos.patchValue({ image: this.uploadedFile });
  }
}
