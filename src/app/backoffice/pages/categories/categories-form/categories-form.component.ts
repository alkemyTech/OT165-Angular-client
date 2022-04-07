import { selectCategoryById } from './../../../../state/selectors/category.selectors';
import { Observable } from 'rxjs';
import { createCategory, editCategory } from './../../../../state/actions/category.actions';
import { Store } from '@ngrx/store';
import { Category } from './../../../../shared/models/Category';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/state/app.state';


@Component({
  selector: "app-categories-form",
  templateUrl: "./categories-form.component.html",
  styleUrls: ["./categories-form.component.scss"],
})
export class CategoriesFormComponent implements OnInit {
  
  category: Category = {} as Category;
  category$!: Observable<Category | undefined>;
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) {
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
    this.category$ = this.store.select(selectCategoryById(id))
    this.category$.subscribe(async res => {
      const response = await res;
      this.category = response!;      
      this.setCategoryForm(response)      
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
    let file = event.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if(!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  // set base64 string to image field at formulary
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.uploadedFile = reader.result;
    this.catForm.patchValue({image: this.uploadedFile});
  }

  sendCategory() {
    let updateCategory: Category = {} as Category    
    if(this.uploadedFile != null) {
      updateCategory = {
        id: this.category.id,
        name: this.catForm.get('name')?.value,
        description: this.catForm.get('description')?.value,
        image: this.catForm.get('image')?.value
      } 
    } else {
      updateCategory = {
        id: this.category.id,
        name: this.catForm.get('name')?.value,
        description: this.catForm.get('description')?.value
      } 
    }    
    if(this.category.id){
      this.store.dispatch(editCategory({category: updateCategory}))
    } else {      
      this.store.dispatch(createCategory({category: this.catForm.value}))                 
    }     
  }

  returnToList() {
    this.router.navigateByUrl('/backoffice/categorias')   
  }

}
