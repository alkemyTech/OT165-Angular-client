import { Component } from "@angular/core";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { User } from "src/app/backoffice/models/user";
import { UserService } from "src/app/backoffice/services/users/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent {
  users!: Array<User>;
  tableUsers!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "email", header: "Correo" },
  ];
  isLoading!:boolean;

  constructor(private servicioUser: UserService) {
    this.isLoading = true;
    this.servicioUser.getUsers().subscribe(
      (response) => { this.showUsers(response)},
      (error) => {error},
      () => {this.isLoading = false}
    );
  }

  showUsers(response: any) {
    this.users = <Array<User>>response;
    this.tableUsers = {
      createPath: '/backoffice/usuario',
      editPath: '/backoffice/usuario',
      title: 'Usuario',
      data: this.users
    }    
  }

  deleteUser(id: number) {
    this.servicioUser.deleteUser(id).subscribe((response) => {
      response;
    });
  }
}
