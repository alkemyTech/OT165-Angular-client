import { MessageService } from 'primeng/api';
import { CategoryService } from "./../../../../services/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/Category";
import { Columns, TableData } from 'src/app/backoffice/models/TableData.interface';
import { Store } from '@ngrx/store';
import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { getCategories } from 'src/app/state/actions/category.actions';
import { Observable } from 'rxjs';

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
  providers: [MessageService]
})
export class CategoryListComponent implements OnInit {
  categories!: Observable<readonly Category[]>;
  tableCategories!: TableData;
  titlesCol: Columns[] = [
  {field: 'name', header: 'Nombre'},   
  {field: 'created_at', header: 'Creado'}
  ]  

  constructor(private categoryService: CategoryService,
              private messageService: MessageService,
              private store: Store<CategoryState>) {
              this.categories = store.select('categories');
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.store.dispatch(getCategories())
    /* this.categoryService.getAll().subscribe(async (categories: any) => {
      this.categories = await categories;
      this.tableCategories = {
        createPath: '/backoffice/categorias/crear',
        editPath: '/backoffice/categorias/editar',
        title: 'Categorias',
        data: this.categories
      }
    }); */
  }  
  deleteCategory(e: number) {
    this.categoryService.deleteById(e).subscribe({
      next: res => {
        this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'Categoria eliminada!', life: 3000});
      },
      error: err => {
        this.messageService.add({severity:'success', summary: 'Error', detail: 'La categoría no pudo ser eliminada.', life: 3000});
      }
    })
    
  }  
}
