import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/backoffice/models/news';
import { NewsService } from 'src/app/backoffice/services/news.service';

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

  ngOnInit(): void {}
}
