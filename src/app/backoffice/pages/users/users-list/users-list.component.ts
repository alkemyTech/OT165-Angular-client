import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/backoffice/models/user';
import { UserService } from 'src/app/backoffice/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users!:Array<User>;

  constructor(private servicioUser: UserService) { 
    this.servicioUser.getUsers().subscribe(
      response => { this.showUsers(response)}
    )
  }

  ngOnInit(): void {
  }

  showUsers(response: any){
    this.users = <Array<User>>response.data;
    console.log(this.users[1]);
  }
}
