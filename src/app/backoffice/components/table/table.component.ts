import { ConfirmDialogComponent } from '../../../shared/components/dialog/confirm-dialog.component';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { ConfirmationService, SortEvent } from "primeng/api";
import { Columns, TableData } from "src/app/backoffice/models/TableData.interface";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  providers: [ConfirmationService]  
})
export class TableComponent implements OnChanges {
  /* De manera generica este componente recibe un objeto generalizando Usuarios, Actividades, Slides */
  @Input() items!: TableData;
  /* Recibe un arreglo de string que seran los titulos de las columnas */
  @Input() columns!: Columns[];
  /* Al hacer click en eliminar un item se envia el ID del item al componente que implemente la tabla */
  @Output() deleteItemById = new EventEmitter<number>();
  @ViewChild(ConfirmDialogComponent, {static: true}) dialog!: ConfirmDialogComponent;
  key: string = '';
  @Output() keyword: EventEmitter<string> = new EventEmitter();
  @Input() isLoading: boolean = false;
  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = changes?.isLoading?.currentValue ?? this.isLoading;
  }
  
  openDialog(id: number, message: string) {
    this.dialog.confirm(id, message);
  }
  deleteItem(id: number) {
    this.items.data = this.items.data.filter(val => val.id !== id);
    this.deleteItemById.emit(id);    
  }
  toggleInput(){
    this.keyword.emit(this.key);
  }
}
