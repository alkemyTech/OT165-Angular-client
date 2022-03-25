import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Data } from "src/app/backoffice/models/slide.interface";
import { TableData } from "src/app/backoffice/models/TableData.interface";
import { SlideService } from "src/app/backoffice/services/slide.service";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class SlidesListComponent implements OnInit {

  items!: TableData

  titlesCol: string[] = ['Nombre', 'Imagen', 'Descripción','Orden']

  modalDialog!: boolean;

  slides!: Data[];

  constructor(
    private messageService: MessageService,
    private slideService: SlideService
  ) {
    
  }

  ngOnInit(): void {
    this.slideService.getAllSildes().subscribe((data) => {
      this.slides = data.data.filter(slide => slide.order !== null);
      this.items = {
        path: '/backoffice/slides/',
        title: 'Slides',
        data: this.slides
      }
    });
  }

  public deleteSlides(event: number) {
    this.slideService.deleteSlide(event).subscribe( res => {
      if (res.success) {
        this.slides = this.slides.filter(val => val.id !== event);
        this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'Slide eliminado!', life: 3000});
      }else{
        this.messageService.add({severity:'warn', summary: 'error', detail: 'error al intentar eliminar', life: 3000});
      }
    },error => {
      this.messageService.add({severity:'error', summary: 'error', detail: 'error al intentar eliminar', life: 3000});
    })
  }
}