import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { loginSend } from "src/app/shared/models/auth/loginSend.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { registerSend } from "src/app/shared/models/auth/registerSend.interface";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

import { JwtHelperService } from "@auth0/angular-jwt";
import { UserState } from "src/app/shared/models/auth/userState.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url_API = "";

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private jwt: JwtHelperService
  ) {}

  public loginAPI(user: loginSend): Observable<LoginResponse> {
    this.url_API = environment.BASE_URL_API + "login";
    return this.http.post<LoginResponse>(`${this.url_API}`, user);
  }

  public registerUserAPI(user: registerSend): Observable<RegisterResponse> {
    this.url_API = environment.BASE_URL_API + "register";
    return this.http.post<RegisterResponse>(`${this.url_API}`, user);
  }

  public googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  public setUserGoogle(credential:any, token: string) {
    let user: UserState = {
      success: true,
      user: {
        token: token,
        user: {
          name: credential.user.displayName,
          email: credential.user.email,
          profile_image: credential.user.photoURL,
          role_id: 1
        }
      }
    }
    return user;
  }

  //Firebase Logout
  public signOutGoogle(): Observable<any> {
    return from(this.afAuth.signOut());
  }

  // Token validator
  public isTokenValid(token: string): boolean {
    return !this.jwt.isTokenExpired(token) && token !== undefined;
  }
}
