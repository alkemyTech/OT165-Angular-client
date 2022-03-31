import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { SpinnerService } from "src/app/backoffice/components/spinner/spinner.service";
import { Slide } from "src/app/backoffice/models/slide.interface";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { SlideService } from "src/app/backoffice/services/slide.service";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class SlidesListComponent implements OnInit {
  items!: TableData;

  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "description", header: "Descripción" },
    { field: "order", header: "Orden" },
  ];

  modalDialog!: boolean;

  slides!: Slide[];

  spinner$ = this.spinnerService.loading$;

  constructor(
    private messageService: MessageService,
    private slideService: SlideService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.slideService.getAllSildes().subscribe((data) => {
      this.slides = data.filter((slide) => slide.order !== null);
      this.items = {
        createPath: "/backoffice/slides/undefined",
        editPath: "/backoffice/slides/",
        title: "Slides",
        data: this.slides,
      };
      this.spinnerService.hide();
    });
  }

  public deleteSlides(event: number) {
    this.spinnerService.show();
    this.slideService.deleteSlide(event).subscribe(
      (res) => {
        if (res.success) {
          this.slides = this.slides.filter((val) => val.id !== event);
          this.messageService.add({
            severity: "success",
            summary: "Eliminado",
            detail: "Slide eliminado!",
            life: 3000,
          });
        } else {
          this.messageService.add({
            severity: "warn",
            summary: "error",
            detail: "error al intentar eliminar",
            life: 3000,
          });
        }
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "error",
          detail: "error al intentar eliminar",
          life: 3000,
        });
      }
    );
    this.spinnerService.hide();
  }
}
