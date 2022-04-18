import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOut } from 'src/app/state/actions/auth.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openBar: EventEmitter<any> = new EventEmitter();

  constructor(
    private store: Store<AppState>
  ) { }

  toggleOpenBar() {
    this.openBar.emit();
  }

  logOut() {
    this.store.dispatch(logOut())
  }

}
