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
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CKEditorModule } from "ckeditor4-angular";
import { SharedModule } from "../shared/shared.module";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { ControlComponent } from "./pages/backoffice/control/control.component";
import { PublicModule } from "../public/public.module";
import { DialogModule } from "primeng/dialog";
import { HttpClientModule } from "@angular/common/http";

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
        BackofficeComponent,
        ControlComponent,
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
        SharedModule,
        DropdownModule,
    ],
    exports: [
        ActivityFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        CategoriesFormComponent,
        NewsFormComponent,
        SlidesFormComponent,
        TestimonialFormComponent,
        UserFormComponent,
        OrganizationFormComponent,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        RxReactiveFormsModule,
        CKEditorModule,
        DropdownModule,
    ],
})
export class BackOfficeModule {}
