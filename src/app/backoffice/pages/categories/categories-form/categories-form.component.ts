import { CategoryService } from '../../../../services/category/category.service';
import { Category } from './../../../../shared/models/Category';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category: Category = {} as Category;
  actionType: string = 'Crear';
  buttonAction: string = 'Crear';
  paramID: number = 0;
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
    
  maxFileSize: number = 2000000;
  uploadedFile: any = null;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.paramID = this.route.snapshot.params['id'] != undefined ? this.route.snapshot.params['id'] : 0;    
  }

  ngOnInit(): void {    
    if(this.paramID != 0) {
      this.getCategory(this.paramID);
      this.actionType = 'Editar';
      this.buttonAction = 'Guardar';
    }
  }
 

  getCategory(id: number) {
    this.categoryService.getCategoryById(id).subscribe({
      next: async (res) => {
        this.category = await res.data;
        this.setCategoryForm(this.category)        
      }     
    })
  }

  setCategoryForm(cat: any) {
    this.catForm.setValue({
      name: cat.name,
      description: cat.description,
      image: cat.image
    })    
  }
  // onClick upload button convert image file to base64 string
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

  // set base64 string to image field at formulary
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.uploadedFile = reader.result;    
    this.catForm.patchValue({image: this.uploadedFile})          
  }

  sendCategory() {
    let updateCategory = {}    
    if(this.uploadedFile != null) {
      updateCategory = {
        name: this.catForm.get('name')?.value,
        description: this.catForm.get('description')?.value,
        image: this.catForm.get('image')?.value
      }
    } else {
      updateCategory = {
        name: this.catForm.get('name')?.value,
        description: this.catForm.get('description')?.value
      } 
    }    
    if(this.category.id){
      this.categoryService.updateCategoryById(this.category.id, updateCategory).subscribe();
    } else {
      this.categoryService.storeNewCategory(this.catForm.value).subscribe();
    } 
    
  }

}
