import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { loginSend } from "src/app/shared/models/auth/loginSend.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { registerSend } from "src/app/shared/models/auth/registerSend.interface";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider, UserCredential } from "firebase/auth";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url_API = "";
  private userLoged: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router
  ) {}

  public get getUserLoged(): Observable<any>{
    return this.userLoged.asObservable()
  }

  public loginAPI(user: loginSend): Observable<LoginResponse> {
    this.url_API = environment.BASE_URL_API + "login";
    return this.http.post<LoginResponse>(`${this.url_API}`, user);
  }

  public registerUserAPI(user: registerSend): Observable<RegisterResponse> {
    this.url_API = environment.BASE_URL_API + "register";
    return this.http.post<RegisterResponse>(`${this.url_API}`, user);
  }

  // Firebase signInWithRedirect
  private async OAuthProvider(provider: any): Promise<any> {
    return await this.afAuth
      .signInWithRedirect(provider)
  }
  // Firebase Google Sign-in
  public async SigninWithGoogle(): Promise<any> {
    await this.OAuthProvider(new GoogleAuthProvider())
  }

  public resultsUserGoogle(): Observable<any>{
    this.afAuth.getRedirectResult().then((credentials) => {
      if (credentials.user) {
        const userGoogle = this.setUserGoogle(credentials.user)
        this.userLoged.next(userGoogle)
      }
    })
    return this.userLoged.asObservable()
  }

  private setUserGoogle(user: any){
    return {
      name: user.displayName,
      email: user.email,
      photoProfile: user.photoURL
    }
  }
  // Firebase Logout
  public SignOut(): Promise<any> {
    return this.afAuth.signOut().then(() => {
      this.router.navigateByUrl("home");
    });
  }
}
