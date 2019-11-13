import { Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "eager",
        loadChildren: () => import("./lazy/lazy.module").then(m => m.LazyModule)
      },
      {
        path: "**",
        redirectTo: "eager"
      }
    ]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      initialNavigation: "enabled",
      useHash: true
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
