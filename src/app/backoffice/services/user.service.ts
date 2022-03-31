import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, "users");
  }

  public getUsers(): Observable<User[]> {
    return super.getAll();
  }

  public createUser(user: User): Observable<User> {
    return super.post(user);
  }

  public getUser(id: number): Observable<User> {
    return super.getById(id);
  }

  public updateUser(id: number, user: User): Observable<User> {
    return super.putById(id, user);
  }

  public deleteUser(id: number): Observable<any> {
    return super.deleteById(id);
  }
}
