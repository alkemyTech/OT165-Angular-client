import { BackOfficeModule } from './backoffice/backoffice.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeFormComponent } from './backoffice/pages/home/home-form/home-form.component';
import { TitleComponent } from './shared/components/title/title.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule} from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: 
    [
      AppComponent, 
      HomeFormComponent,
      TitleComponent
    ],
  imports: 
    [
      BrowserModule, 
      CommonModule,
      AppRoutingModule, 
      HttpClientModule,
      BackOfficeModule,
      ButtonModule, 
      InputTextareaModule, 
      FormsModule, 
      InputNumberModule,
      ReactiveFormsModule,
      DropdownModule,
      BrowserAnimationsModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
