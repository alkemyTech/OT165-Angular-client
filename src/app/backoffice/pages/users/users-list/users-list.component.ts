import { filterUserByName } from './../../../../state/selectors/users.selectors';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import {
  Columns,  
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { User } from "src/app/backoffice/models/user";
import { UserService } from "src/app/services/auth/user.service";
import { deleteUser, getUsers } from "src/app/state/actions/users.actions";
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
  subject: Subject<any> = new Subject();

  constructor(private userService: UserService, private store: Store<AppState>) {          
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(getUsers());
  }

  ngOnInit(): void {    
    this.users$ = this.store.select(selectUsersList);
    this.users$.subscribe( response => {
      this.loadTable(response);
    })
    this.subject.pipe(debounceTime(700)).subscribe((res) => {
      this.search(res)      
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
    this.store.dispatch(deleteUser({id: id}));    
  }
  debounce(key: string) {
    this.subject.next(key)
  }
  search(key: any) {
    if(key.length >= 2) {
      this.users$ = this.store.select(filterUserByName(key));
      this.users$.subscribe((res) => {
        this.loadTable(res);
      })
    } else {
      this.users$ = this.store.select(selectUsersList);
      this.users$.subscribe((res) => {
        this.loadTable(res);
      })
    } 
  }
}