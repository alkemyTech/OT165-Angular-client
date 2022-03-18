import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  formBuilder: FormBuilder = new FormBuilder();
  amount:FormControl = this.formBuilder.control(
    500, []
  );
  msj:string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, atque ipsum. Architecto odio sed commodi?';

  constructor() { }

  ngOnInit(): void {
  }

}
