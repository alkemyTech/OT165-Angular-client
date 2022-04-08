import { MessageService } from "primeng/api";
import { CategoryService } from "./../../../../services/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/Category";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
  providers: [MessageService],
})
export class CategoryListComponent implements OnInit {
  categories!: Array<Category>;
  tableCategories!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "created_at", header: "Creado" },
  ];
  skeleton!: boolean;

  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.skeleton = true;
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(async (categories: any) => {
      this.categories = await categories;
      this.tableCategories = {
        createPath: "/backoffice/categorias/crear",
        editPath: "/backoffice/categorias/editar",
        title: "Categorias",
        data: this.categories,
      };
      this.skeleton = false;
    });
  }
  deleteCategory(e: number) {
    this.skeleton = true;
    this.categoryService.deleteById(e).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Eliminado",
          detail: "Categoria eliminada!",
          life: 3000,
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: "success",
          summary: "Error",
          detail: "La categoría no pudo ser eliminada.",
          life: 3000,
        });
      },
      error: err => {
        this.messageService.add({severity:'success', summary: 'Error', detail: 'La categoría no pudo ser eliminada.', life: 3000});
      }
    })    
  }  
    });
    this.skeleton = false;
  }

}
