import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/backoffice/models/user";
import { logOut } from "src/app/state/actions/auth.actions";
import { AppState } from "src/app/state/app.state";
import { selectUserData } from "src/app/state/selectors/auth.selectors";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  user!: User;
  userLoged$: Observable<any>;
  isLogged: boolean = false;
  constructor(private store: Store<AppState>) {
    this.userLoged$ = this.store.select(selectUserData);
    this.userLoged$.subscribe(res => {            
      if(res != undefined){
        this.isLogged = true;
        this.user = res.user
      }
    })
  }

  public logOut() {
    this.isLogged = false;
    this.store.dispatch(logOut());
  }
}
