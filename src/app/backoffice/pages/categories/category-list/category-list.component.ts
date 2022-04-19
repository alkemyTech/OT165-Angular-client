import { AppState } from './../../../../state/app.state';
import { selectCategories } from './../../../../state/selectors/category.selectors';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/Category';
import {
  Columns,
  TableData,
} from 'src/app/backoffice/models/TableData.interface';
import { Store } from '@ngrx/store';
import {
  deleteCategory,
  getCategories,
} from 'src/app/state/actions/category.actions';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [MessageService],
})
export class CategoryListComponent implements OnInit {
  categoriesObservable!: Observable<Category[]>;
  categoriesData!: Array<Category>;
  tableCategories!: TableData;
  titlesCol: Columns[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'created_at', header: 'Creado' },
  ];
  skeleton!: boolean;

  key: Subject<any> = new Subject<any>();

  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.skeleton = true;
    this.getCategories();
    this.categoriesObservable = this.store.select(selectCategories);
    this.categoriesObservable.subscribe((res) => {
      this.loadTable(res);
      this.skeleton = false;
    });
    //Debounce
    this.key
      .pipe(debounceTime(500))
      .subscribe((res) => this.searchCategories(res));
  }

  getCategories() {
    this.store.dispatch(getCategories());
  }
  loadTable(response: Category[]) {
    this.categoriesData = JSON.parse(JSON.stringify(response));
    this.tableCategories = {
      createPath: '/backoffice/categorias/crear',
      editPath: '/backoffice/categorias/editar',
      title: 'Categorias',
      data: this.categoriesData,
    };
  }
  deleteCategory(e: number) {
    this.skeleton = true;
    this.store.dispatch(deleteCategory({ id: e }));
    this.skeleton = false;
  }
  debounce(e: any) {
    this.key.next(e);
  }
  searchCategories(key: any) {
    if (key.length <= 2) {
      this.categoryService.getAll().subscribe((res) => this.loadTable(res));
    } else {
      this.categoryService
        .getCategories(key)
        .subscribe((res) => this.loadTable(res));
    }
  }
}
