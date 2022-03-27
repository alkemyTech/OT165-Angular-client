import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Own Modules
import { BackOfficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";

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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
