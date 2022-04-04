import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { User } from "../../backoffice/models/user";
import { environment } from "src/environments/environment";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { loginSend } from "src/app/shared/models/auth/loginSend.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { registerSend } from "src/app/shared/models/auth/registerSend.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService{
  private url_API = "";

  constructor(private http: HttpClient) {
  }

  public loginAPI(user: loginSend): Observable<LoginResponse> {
    this.url_API = environment.BASE_URL_API + "login";
    return this.http.post<LoginResponse>(`${this.url_API}`, user);
  }

  public registerUserAPI(user: registerSend): Observable<RegisterResponse> {
    this.url_API = environment.BASE_URL_API + "register";
    return this.http.post<RegisterResponse>(`${this.url_API}`, user);
  }
}
