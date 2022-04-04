import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  Columns,  
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { User } from "src/app/backoffice/models/user";
import { UserService } from "src/app/services/auth/user.service";
import { getUsers, getUsersSuccess } from "src/app/state/actions/users.actions";
import { AppState } from "src/app/state/app.state";
import { selectLoading, selectUsersList } from "src/app/state/selectors/users.selectors";

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
  loading$:Observable<boolean> = new Observable();
  users$: Observable<User[]> = new Observable();

  constructor(private servicioUser: UserService, private store: Store<AppState>) {          
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(getUsers());

    this.servicioUser.getUsers().subscribe(
      (response:User[]) => {
        this.store.dispatch(getUsersSuccess(
          { users: response }
        ));
    });
  }

  ngOnInit(): void {    
    this.users$ = this.store.select(selectUsersList);
    this.users$.subscribe( response => {
      this.loadTable(response);
    })      
  }

  loadTable(response: User[]){
    this.users = JSON.parse(JSON.stringify(response));
    
    this.tableUsers = {
      createPath: "/backoffice/usuario",
      editPath: "/backoffice/usuario",
      title: "Usuario",
      data: this.users,
    };
  }

  deleteUser(id: number) {    
    this.servicioUser.deleteUser(id).subscribe((response) => {
      response;      
    });
  }
}