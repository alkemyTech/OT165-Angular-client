import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BackOfficeModule } from './backoffice/backoffice.module';
//Own Modules

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BackOfficeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



