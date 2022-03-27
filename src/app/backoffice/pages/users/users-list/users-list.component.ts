import { Component } from '@angular/core';
import { TableData } from 'src/app/backoffice/models/TableData.interface';
import { User } from 'src/app/backoffice/models/user';
import { UserService } from 'src/app/backoffice/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent{
  users!:Array<User>;
  tableUsers!:TableData;
  titlesCol: string[] = ['Nombre', 'Correo'];

  constructor(private servicioUser: UserService) { 
    this.servicioUser.getUsers().subscribe(
      response => { this.showUsers(response)}
    )
  }

  showUsers(response: any){
    this.users = <Array<User>>response.data;    
    this.tableUsers = {
      path: '/backoffice/user-form',
      title: 'Usuario',
      data: this.users
    }    
  }

  deleteUser(id: number){    
    this.servicioUser.deleteUser(id).subscribe(
      response => { response }
    )
  }
}