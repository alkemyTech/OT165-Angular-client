import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import {
  registeredUser,
  registerError,
  registerUser,
} from "../actions/auth.actions";
import { AuthEffects } from "./auth.effects";

import { TestScheduler } from "rxjs/testing";
import { Router } from "@angular/router";

fdescribe("RegisterEffects", () => {
  const initialState = { user: {} };
  const authService = jasmine.createSpyObj("AuthService", [
    "registerUser",
    "registeredUser",
    "registerError",
  ]);

  const testUrl = "/some/test/url";
  let effects: AuthEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Router,
        AuthEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: { url: testUrl } },
      ],
    });

    effects = TestBed.inject(AuthEffects);
    store = TestBed.inject(MockStore);
    store.setState({});

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("deberia crear", () => {
    expect(effects).toBeTruthy();
  });
});
