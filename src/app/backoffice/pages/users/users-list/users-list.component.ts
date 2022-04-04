import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  Columns,  
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { User } from "src/app/backoffice/models/user";
import { UserService } from "src/app/services/auth/user.service";
import { getUsers } from "src/app/state/actions/users.actions";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit{
  users!: Array<User>;
  tableUsers!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "email", header: "Correo" },
  ];
  isLoading!:boolean;
  usersList$!: Observable<Array<User>>;

  constructor(private servicioUser: UserService, private store: Store<{users: Array<User>}>) {    
    this.isLoading = false;
    this.store.dispatch(getUsers());
    // this.servicioUser.getUsers().subscribe(
    //  (response) => { this.showUsers(response)},
    //  (error) => {error},
    //  () => {this.isLoading = false}
    // );    
  }

  ngOnInit(): void {
    this.store.subscribe(state => this.createUsersList(state));
  }

  createUsersList(state: any){
    // console.log(state);
    this.usersList$ = state.users;    
    this.users = JSON.parse(JSON.stringify(this.usersList$));
    this.tableUsers = {
      createPath: '/backoffice/usuario',
      editPath: '/backoffice/usuario',
      title: 'Usuario',
      data: this.users
    }  
  }

  // showUsers(response: any) {
  //   this.users = <Array<User>>response;
  //   this.tableUsers = {
  //     createPath: '/backoffice/usuario',
  //     editPath: '/backoffice/usuario',
  //     title: 'Usuario',
  //     data: this.users
  //   }    
  // }

  deleteUser(id: number) {
    this.servicioUser.deleteUser(id).subscribe((response) => {
      response;
    });
  }
}
