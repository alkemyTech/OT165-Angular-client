import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';

@Component({
  selector: 'app-lorenzo-tests',
  templateUrl: './lorenzo-tests.component.html',
  styleUrls: ['./lorenzo-tests.component.scss']
})
export class LorenzoTestsComponent {

  constructor(private dialogService: DialogService) { }

  addMessageError() {
    this.dialogService.add({
      type: 'error',
      title: 'Probando un título',
      detail: 'Este es un detalle de prueba de error'
    });
  }
  addMessageWarning() {
    this.dialogService.add({
      type: 'warning',
      title: 'Probando un título',
      detail: 'Este es un detalle de prueba de error'
    });
  }
  addMessageSuccess() {
    this.dialogService.add({
      type: 'success',
      title: 'Probando un título',
      detail: 'Este es un detalle de prueba de error'
    });
  }

}
