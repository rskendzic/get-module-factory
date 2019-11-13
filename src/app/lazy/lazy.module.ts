import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { routes as usersRoutes, UsersModule } from "../users/users.module";
import { routes as rolesRoutes, RolesModule } from "../roles/roles.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "users",
        children: usersRoutes
      },
      {
        path: "roles",
        children: rolesRoutes
      },
      {
        path: "**",
        redirectTo: "users"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersModule,
    RolesModule
  ],
  declarations: [LayoutComponent],
  id: "ContextAdminModule"
})
export class LazyModule {}
