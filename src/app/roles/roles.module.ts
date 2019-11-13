import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MasterDetailComponent } from "./master-detail/master-detail.component";

export const routes: Routes = [
  {
    path: "",
    component: MasterDetailComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MasterDetailComponent]
})
export class RolesModule {}
