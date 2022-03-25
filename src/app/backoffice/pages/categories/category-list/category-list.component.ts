import { CategoryService } from "./../../../../services/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/Category";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  first: number = 0;
  rows: number = 10;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(async (categories) => {
      this.categories = await categories;
    });
  }
  newCategory() {}
  editCategory(cat: Category) {}
  deleteCategory(cat: Category) {}

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.categories ? this.first === this.categories.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.categories ? this.first === 0 : true;
  }
}
