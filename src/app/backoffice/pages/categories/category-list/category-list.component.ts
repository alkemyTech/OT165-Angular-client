import { MessageService } from 'primeng/api';
import { CategoryService } from "./../../../../services/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/Category";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
  providers: [MessageService]
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];
  first: number = 0;
  rows: number = 10;  

  constructor(private categoryService: CategoryService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(async (categories: any) => {
      this.categories = await categories;
    });
  }
  newCategory() {}
  editCategory(cat: Category) {}
  deleteCategory(e: number) {
    this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'Categoria eliminada!', life: 3000});
  }  
}
