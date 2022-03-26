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

import { ToolbarModule } from "primeng/toolbar";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextareaModule } from "primeng/inputtextarea";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CKEditorModule } from "ckeditor4-angular";
import { SharedModule } from "../shared/shared.module";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { ControlComponent } from "./pages/backoffice/control/control.component";
import { DialogModule } from "primeng/dialog";
import { HttpClientModule } from "@angular/common/http";

import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { TableComponent } from "./shared/components/table/table.component";

@NgModule({
    declarations: [
        ActivityFormComponent,
        HomeFormComponent,
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
        SlidesListComponent,
        TableComponent,
    ],
    imports: [
        ConfirmDialogModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        CommonModule,
        BackOfficeRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        RxReactiveFormsModule,
        CKEditorModule,
        FileUploadModule,
        DialogModule,
        HttpClientModule,
        SharedModule,
        DropdownModule,
        InputTextareaModule,
    ],
    exports: [],
})
export class BackOfficeModule {}
