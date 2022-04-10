import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';

import { BackOfficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";
import { CampanaEscolarModule } from './landing/campana-escolar/campana-escolar.module';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./state/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { REDUCERS } from "./state/app.state";
import { AuthEffects } from "./state/effects/auth.effects";
import { UsersEffects } from "src/app/state/effects/users.effects";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { SlidesEffects } from "./state/effects/slides.effects";
import { CategoryEffects } from './state/effects/category.effects';
import { MembersEffects } from './state/effects/members.effects';

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
    CampanaEscolarModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    InputNumberModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects, UsersEffects, SlidesEffects, MembersEffects, CategoryEffects]),
    StoreModule.forRoot(REDUCERS, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ name: "test redux" }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
