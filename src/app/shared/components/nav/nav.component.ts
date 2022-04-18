import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { logOut } from "src/app/state/actions/auth.actions";
import { AppState } from "src/app/state/app.state";
import { selectUserData } from "src/app/state/selectors/auth.selectors";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  userLoged$: Observable<any>;
  isLogged: boolean = false;
  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.userLoged$ = this.store.select(selectUserData);
    this.userLoged$.subscribe(res => {            
      if(res != undefined){
        this.isLogged = true;
      }
    })

    this.authService.resultsUserGoogle().subscribe(res => {
      if (res) {        
        this.userLoged$ = this.authService.getUserLoged
        this.isLogged = true        
      }
    })
  }

  public logOut() {
    this.isLogged = false;
    this.store.dispatch(logOut());
    this.authService.SignOut();
  }
}
