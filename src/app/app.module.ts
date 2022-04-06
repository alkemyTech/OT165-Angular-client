import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";

//Own Modules
import { BackOfficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./state/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { REDUCERS } from "./state/app.state";
import { AuthEffects } from "./state/effects/auth.effects";
import { UsersEffects } from "src/app/state/effects/users.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BackOfficeModule,
    PublicModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    InputNumberModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects, UsersEffects]),
    StoreModule.forRoot(REDUCERS, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ name: "test redux" })    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
