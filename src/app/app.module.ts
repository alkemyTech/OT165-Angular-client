import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BackOfficeModule } from './backoffice/backoffice.module';
import { TitleComponent } from './shared/components/title/title.component';
//Own Modules

@NgModule({
  declarations: [AppComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BackOfficeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



