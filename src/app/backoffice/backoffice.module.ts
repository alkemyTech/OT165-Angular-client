import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BackOfficeRoutingModule } from "./backoffice-routing.module";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";

import {FileUploadModule} from 'primeng/fileupload';
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";


import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CKEditorModule } from 'ckeditor4-angular';
import { PublicModule } from "../public/public.module";

import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {HttpClientModule} from '@angular/common/http';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';
import { ControlComponent } from './pages/backoffice/control/control.component';


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    OrganizationFormComponent,
    BackofficeComponent,
    ControlComponent
  ],
  imports: [
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    CommonModule,
    BackOfficeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RxReactiveFormsModule,
    CKEditorModule,
    PublicModule,
    FileUploadModule
  ]
})
export class BackOfficeModule {}
