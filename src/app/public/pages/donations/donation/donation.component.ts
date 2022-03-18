import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  amounts: any[] = [
    {
      id: 0,
      amount: 1,
      text: 'Una merienda para 1 niño',
      url: 'https://mpago.la/2jH41Cw'
    },
    {
      id: 1,
      amount: 5,
      text: 'Útiles escolares para 1 niño',
      url: 'https://mpago.la/2hsvFr7'
    },
    {
      id: 2,
      amount: 10,
      text: '10 meriendas para un niño',
      url: 'https://mpago.la/1ghaQRo'
    },
    {
      id: 3,
      amount: 1000,
      text: 'Una beca para 2 niños',
      url: 'https://mpago.la/1YsZj6T'
    },
    {
      id: 4,
      amount: 5000,
      text: 'Una beca para 10 niños',
      url: 'https://mpago.la/1KLurCp'
    }
  ];
  selected: number = 0;
  msj:string = 'Tu donación es expresión de un vínculo que nos ayuda a llevar asistencia, esperanza y oportunidades para que muchos niños puedan cumplir sus sueños.';

  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(id: number) {
    this.selected = id;
  }

}
