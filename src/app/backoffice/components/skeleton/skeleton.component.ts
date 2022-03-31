import { Component, Input } from '@angular/core';
import {
  Columns,
  TableData,
} from 'src/app/backoffice/models/TableData.interface';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  providers: [],
})
export class SkeletonComponent {
  /* De manera generica este componente recibe un objeto generalizando Usuarios, Actividades, Slides */
  @Input() items!: TableData;
  /* Recibe un arreglo de string que seran los titulos de las columnas */
  @Input() columns!: Columns[];
  /* Al hacer click en eliminar un item se envia el ID del item al componente que implemente la tabla */

  constructor() {}
}
