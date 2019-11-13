import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersOverviewComponent } from "./users-overview/users-overview.component";

export const routes: Routes = [
  {
    path: "",
    component: UsersOverviewComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UsersOverviewComponent]
})
export class UsersModule {}
