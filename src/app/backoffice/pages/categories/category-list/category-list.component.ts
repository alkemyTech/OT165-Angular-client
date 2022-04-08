import { AppState } from './../../../../state/app.state';
import { selectCategories } from './../../../../state/selectors/category.selectors';
import { MessageService } from "primeng/api";
import { CategoryService } from "./../../../../services/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/Category";
import { Columns, TableData } from 'src/app/backoffice/models/TableData.interface';
import { select, Store } from '@ngrx/store';
import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { deleteCategory, getCategories } from 'src/app/state/actions/category.actions';
import { Observable } from "rxjs";



@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
  providers: [MessageService],
})
export class CategoryListComponent implements OnInit {
  categoriesObservable!: Observable<Category[]>;
  categoriesData!: Array<Category>;
  tableCategories!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "created_at", header: "Creado" },
  ];
  skeleton!: boolean;

  constructor(private messageService: MessageService,
              private store: Store<AppState>) {
              
  }

  ngOnInit(): void {
    this.skeleton = true;
    this.getCategories();
    this.categoriesObservable= this.store.select(selectCategories);
    this.categoriesObservable.subscribe(res => {
      this.loadTable(res);
    })
  }

  getCategories() {
    this.store.dispatch(getCategories())   
  }  
  loadTable(response: Category[]) {
    this.categoriesData = JSON.parse(JSON.stringify(response));
    this.tableCategories = {
      createPath: '/backoffice/categorias/crear',
      editPath: '/backoffice/categorias/editar',
      title: 'Categorias',
      data: this.categoriesData
    }
  }
  deleteCategory(e: number) {
    this.skeleton = true;
    this.store.dispatch(deleteCategory({id: e}))    
    this.skeleton = false;
  }

}
