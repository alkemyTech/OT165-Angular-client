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
import { UserState } from "src/app/shared/models/auth/userState.interface";

fdescribe("RegisterEffects", () => {
  const initialState = { success: false, user: {} };
  const authService = jasmine.createSpyObj("AuthService", ["registerUserAPI"]);

  let effects: AuthEffects;
  let actions: Observable<any>;
  let store: MockStore<UserState>;
  let testScheduler: any;
  let routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Router,
        AuthEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: routerSpy },
      ],
    });

    effects = TestBed.inject(AuthEffects);
    store = TestBed.inject(MockStore);
    store.setState({ success: false, user: {} });

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("deberia crear", () => {
    expect(effects).toBeTruthy();
  });

  fdescribe("registerUser", () => {
    it("se llama registerUser y retorna registeredUser", () => {
      const userMock = {
        name: "Olga",
        email: "olga@olga.com",
        password: "a!1234",
        address: "-34.605434506773555, -58.38920615903414",
      };

      const data = {
        success: true,
        data: {
          user: {
            name: "Olga",
            email: "olga@olga.com",
            password: "a!1234",
            address: "-34.605434506773555, -58.38920615903414",
            id: 1234,
          },
          token: "aoeuaoeuaoeuaoeuauoe",
        },
        message: "aoeuaoeu",
      };
      const action = registerUser({ user: userMock });
      const outcome = registeredUser({
        user: {
          success: data.success,
          user: data.data,
        },
      });

      testScheduler.run(({ hot, cold, expectObservable }: any) => {
        actions = hot("-a", {
          a: action,
        });
        const response = cold("-b|", { b: data });
        authService.registerUserAPI.and.returnValue(response);
        expectObservable(effects.registerUser$).toBe("--b", { b: outcome });
      });
    });

    it("se llama registerUser,ocurre un error", () => {
      const userMock = {
        name: "Olga",
        email: "olga@olga.com",
        password: "a!1234",
        address: "-34.605434506773555, -58.38920615903414",
      };

      const error = new Error();
      const action = registerUser({ user: userMock });
      const outcome = registerError();
      testScheduler.run(({ hot, cold, expectObservable }: any) => {
        actions = hot("-a", {
          a: action,
        });
        const response = cold("-#|", {}, error);
        authService.registerUserAPI.and.returnValue(response);
        expectObservable(effects.registerUser$).toBe("--b", { b: outcome });
      });
    });
  });
});
