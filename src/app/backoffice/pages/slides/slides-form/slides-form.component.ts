import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Slide, SlideResponse } from "../../../models/slide.interface";
import { SlideService } from "../../../services/slide.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  public title: string = "";
  public edit: boolean = false;
  public slide$!: Observable<SlideResponse>;
  public id!: number;

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
    private slideService: SlideService,
    public location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.slide$ = this.slideService.getSingleSlide(this.id);
      this.slide$.subscribe(
        (res: SlideResponse) => {
          if (res.success) {
            this.setSlideById(res.data);
            this.edit = true;
            this.title = "Editar";
          }else{
            this.title = "Crear";
          }
        },
        (err) => {
          if (!err.success) {
            this.title = "Crear";
          }
        }
      );
    } else {
      this.title = "Crear";
    }
  }

  public myUploader(event: Event) {
    this.onUpload(event);
  }

  public editSlide() {
    this.slideService.upDateSlides(this.id, this.datos.value).subscribe(
      (res: SlideResponse) => {
        console.log(res)
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
      (res: SlideResponse) => {
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

  private setSlideById(slide: Slide): Slide {
    this.datos.controls["name"].setValue(slide.name);
    this.datos.controls["description"].setValue(slide.description);
    this.datos.controls["order"].setValue(slide.order);
    this.datos.controls["image"].setValue(slide.image);
    return slide;
  }

  public isNumber(val: number): boolean { 
    return typeof val === 'number'; 
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
