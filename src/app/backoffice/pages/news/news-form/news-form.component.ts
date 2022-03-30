import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/backoffice/models/category';
import { News } from 'src/app/backoffice/models/news';
import { NewsService } from 'src/app/backoffice/services/news/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  @Input() news!: News;  
  actionType: string = 'Crear';
  buttonAction: string = 'Crear';
  paramID!:number;
  categories!:Array<Category>;
  selectedCategory!:Category;

  constructor(private serviceNews: NewsService, private route: ActivatedRoute) {    
    this.paramID = this.route.snapshot.params['id'] != undefined ? this.route.snapshot.params['id'] : 0;
  }

  newsForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    content: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get name(){ return this.newsForm.get('name')!; }
  get content(){ return this.newsForm.get('content')!; }
  get image(){ return this.newsForm.get('image')!; }
    
  maxFileSize: number = 2000000;
  uploadedFile: any = null;

  ngOnInit(): void {    
    if (this.news == null) {
      this.serviceNews.getCategories().subscribe(
        response => { this.showCategories(response) }
      )
    } else {
      this.actionType = 'Editar';
      this.buttonAction = 'Guardar';
      this.showNews();
    }
  }

  showNews(){ 
    this.name.setValue(this.news.name);
    this.content.setValue(this.news.content);
    this.image.setValue(this.news.image);
    
    this.serviceNews.getCategories().subscribe(
      response => { this.showCategories(response) }
    )
  }

  showCategories(response:any){
    this.categories = <Array<Category>>response.data;
    if(this.news != null){      
      let index = this.categories.findIndex(category=>{
        return category.id == this.news.category_id;
      })
      if(index != -1){
        this.selectedCategory = this.categories[index];
      }
    }
  }

  //uploadHandler upload button convert image file to base64 string
  onUpload(event: any) {
    let file = event.files[0]
    let pattern = /image-*/;
    let reader = new FileReader();
    if(!file.type.match(pattern)) {
      alert('Formato inválido')
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  //Set base64 string to image field at formulary
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.uploadedFile = reader.result;    
    this.newsForm.patchValue({image: this.uploadedFile})    
  }

  sendNews(){
    let updateNews = {}    
    if(this.uploadedFile != null) {
      updateNews = {
        name: this.name.value,
        content: this.content.value,
        image: this.image.value
      }
    } else {
      updateNews = {
        name: this.name.value,
        content: this.content.value
      } 
    }    
    if(this.news != null){
      this.serviceNews.updateNews(this.news.id, updateNews).subscribe();
      console.log(updateNews);
    } else {      
      let newNews = {
        name: this.name.value,
        content: this.content.value,
        image: this.image.value,
        category_id: this.selectedCategory.id
      }             
      this.serviceNews.createNews(newNews).subscribe();
    } 
  }

  clearNewsForm(){
    this.newsForm.reset();
    this.selectedCategory = new Category();
  }
}