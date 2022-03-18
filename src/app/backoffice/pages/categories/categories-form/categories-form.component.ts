import { CategoryService } from './../../../../shared/services/category.service';
import { Category } from './../../../../shared/models/Category';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category: Category = {
    name: "OT165 new cat",
    description: "<p>New cat</p>",
    image: "http://ongapi.alkemy.org/storage/6VfuE1GALL.jpeg",
    updated_at: "2022-03-17T22:34:55.000000Z",
    created_at: "2022-03-17T22:34:55.000000Z",
    id: 1855
}
  actionType: string = 'Crear'
  formBuilder: FormBuilder = new FormBuilder();
  catForm: FormGroup = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    description: ['', [
      Validators.required
    ]],
    image: ['', [
      Validators.required
    ]] 
  })
  public Editor = ClassicEditor;  
  maxFileSize: number = 2000000;
  uploadedFile: any = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    if(this.category.id) {
      this.setCategoryForm(this.category)
      this.actionType = 'Editar'
    }
  }

  setCategoryForm(cat: any) {
    this.catForm.setValue({
      name: cat.name,
      description: cat.description,
      image: cat.image
    })    
  }

  onUpload(event: any) {
    let file = event.files[0]
    let pattern = /image-*/;
    let reader = new FileReader();
    if(!file.type.match(pattern)) {
      alert('invalid format')
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this)
    reader.readAsDataURL(file)    
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.uploadedFile = reader.result;
    console.log('image Src', this.uploadedFile);
    this.catForm.patchValue({image: this.uploadedFile})          
  }

  sendCategory() {    
    const category = this.catForm.value;
    if(this.category.id){
      this.categoryService.updateCategoryById(this.category.id, category).subscribe({
        next: res => {
          console.log(res)
        },
        error: err => {
          console.log(err)
        },
        complete: () => {

        }
      })
    } else {
      this.categoryService.storeNewCategory(category).subscribe({
        next: res => {
          console.log(res)
        },
        error: err => {

        },
        complete: () => {

        }
      })
    }
    
  }

}
