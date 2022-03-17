import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';
  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}
