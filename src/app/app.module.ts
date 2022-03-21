import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Own Modules

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
