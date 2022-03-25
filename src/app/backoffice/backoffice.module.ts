import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { BackOfficeRoutingModule } from "./backoffice-routing.module";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";

//Others Modules
import { ButtonModule } from "primeng/button";
import { CKEditorModule } from "ckeditor4-angular";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";

//Own Components
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { ControlComponent } from "./pages/backoffice/control/control.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";

//Own Modules
import { SharedModule } from "../shared/shared.module";
import { MembersComponent } from './pages/members/members.component';

@NgModule({
  declarations: [
    ActivityFormComponent,
    BackofficeComponent,
    CategoriesFormComponent,
    ControlComponent,
    LoginFormComponent,
    NewsFormComponent,
    OrganizationComponent,
    OrganizationFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    HomeFormComponent,
    UserFormComponent,
    MembersComponent,
  ],
  imports: [
    BackOfficeRoutingModule,
    ButtonModule,
    CKEditorModule,
    CommonModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    RxReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class BackOfficeModule {}
