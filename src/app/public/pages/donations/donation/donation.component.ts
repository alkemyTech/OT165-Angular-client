import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit {
  amounts: any[] = [
    {
      id: 0,
      amount: 1,
      text: "Una merienda para 1 niño",
      url: "https://mpago.la/2jH41Cw",
    },
    {
      id: 1,
      amount: 5,
      text: "Útiles escolares para 1 niño",
      url: "https://mpago.la/2hsvFr7",
    },
    {
      id: 2,
      amount: 10,
      text: "10 meriendas para un niño",
      url: "https://mpago.la/1ghaQRo",
    },
    {
      id: 3,
      amount: 1000,
      text: "Una beca para 2 niños",
      url: "https://mpago.la/1YsZj6T",
    },
    {
      id: 4,
      amount: 5000,
      text: "Una beca para 10 niños",
      url: "https://mpago.la/1KLurCp",
    },
  ];
  selected: number = 0;
  msj: string =
    "Tu donación ayuda a que los niños y niñas logren sus sueños";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeSelected(id: number) {
    this.selected = id;
  }

  donar(e: Event) {
    e.preventDefault();
    this.router.navigate(["/gracias"]);
    window.open(this.amounts[this.selected].url);
  }
}
