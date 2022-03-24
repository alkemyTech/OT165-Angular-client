import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Slide, Data } from "src/app/backoffice/models/slide.interface";
import { SlideService } from "src/app/backoffice/services/slide.service";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService,ConfirmationService]
})
export class SlidesListComponent implements OnInit {
  productDialog!: boolean;

  slides!: Data[];

  slide!: Data;

  selectedSlides!: Data[];

  submitted!: boolean;

  constructor(private confirmationService: ConfirmationService,  private messageService: MessageService, private slideService: SlideService) {}

  ngOnInit(): void {
    this.slideService.getAllSildes().subscribe( data => {
      this.slides = data.data
    } )
  }

  public deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.slides = this.slides.filter(
          (val) => !this.selectedSlides.includes(val)
        );
        this.selectedSlides = [];
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Products Deleted",
          life: 3000,
        });
      },
    });
  }
}
