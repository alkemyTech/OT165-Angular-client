import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Own Modules
import { BackOfficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
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
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule {}
