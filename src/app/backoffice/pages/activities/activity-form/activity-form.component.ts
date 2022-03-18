import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  title = 'Apoyo Escolar Nivel Secundaria';
  description = `Del mismo modo que en primaria, este taller es el corazón del área secundaria.
  Serealizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el
  contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre
  13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y
  una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a
  estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un
  punto de encuentro y relación entre ellos y la institución.`

  @Input() activity!: any

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
