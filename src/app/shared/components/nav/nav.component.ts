import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
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
  constructor(private store: Store<AppState>) {
    this.userLoged$ = this.store.select(selectUserData);
  }

  public logOut() {
    this.store.dispatch(logOut());
  }
}
