import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "backoffice",
        loadChildren: () =>
            import("./backoffice/backoffice.module").then(
                (m) => m.BackOfficeModule
            ),
    },
    {
        path: "",
        loadChildren: () =>
            import("./public/public.module").then((m) => m.PublicModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
