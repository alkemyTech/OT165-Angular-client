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
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from "primeng/fileupload";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CKEditorModule } from "ckeditor4-angular";
import { PublicModule } from "../public/public.module";

import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';
import {HttpClientModule} from '@angular/common/http';


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
        OrganizationComponent,
    ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        RxReactiveFormsModule,
        CKEditorModule,
        FileUploadModule,
        PublicModule,
        DialogModule,
        HttpClientModule,
    ]
})
export class BackOfficeModule {}
