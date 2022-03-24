import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Data } from "src/app/backoffice/models/slide.interface";
import { SlideService } from "src/app/backoffice/services/slide.service";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class SlidesListComponent implements OnInit {

  modalDialog!: boolean;

  slides!: Data[];

  slide!: Data;

  submitted!: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private slideService: SlideService
  ) {}

  ngOnInit(): void {
    this.slideService.getAllSildes().subscribe((data) => {
      this.slides = data.data;
    });
  }

  public deleteSlides(slide: Data) {
    this.confirmationService.confirm({
      message: 'Seguro que desea eliminar el slide ' + slide.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.slideService.deleteSlide(slide.id).subscribe( res => {
            if (res.success) {
              this.slides = this.slides.filter(val => val.id !== slide.id);
              this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'Slide eliminado!', life: 3000});
            }else{
              this.messageService.add({severity:'warn', summary: 'error', detail: 'error al intentar eliminar', life: 3000});
            }
          },error => {
            this.messageService.add({severity:'error', summary: 'error', detail: 'error al intentar eliminar', life: 3000});
          })
         
      }
  });
  }
}
