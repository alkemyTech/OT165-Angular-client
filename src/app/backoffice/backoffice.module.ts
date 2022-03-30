import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { BackOfficeRoutingModule } from "./backoffice-routing.module";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";

//Others Modules
import { ButtonModule } from "primeng/button";
import { CKEditorModule } from "ckeditor4-angular";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";

//Own Components
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { ControlComponent } from "./pages/backoffice/control/control.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { MembersComponent } from "./pages/members/members.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { TableComponent } from "./shared/components/table/table.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";

import { SharedModule } from "../shared/shared.module";
import { TokenInterceptorService } from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivityFormComponent,
    BackofficeComponent,
    CategoriesFormComponent,
    CategoryListComponent,
    ControlComponent,
    HomeFormComponent,
    LoginFormComponent,
    MembersComponent,
    NewsFormComponent,
    OrganizationComponent,
    OrganizationFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    SlidesListComponent,
    TableComponent,
    TestimonialFormComponent,
    UserFormComponent,
    UsersListComponent,
  ],
  imports: [
    BackOfficeRoutingModule,
    ButtonModule,
    CKEditorModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RouterModule,
    RxReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class BackOfficeModule {}
