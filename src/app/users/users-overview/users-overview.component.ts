import { Component, OnInit, getModuleFactory } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-users-overview",
  templateUrl: "./users-overview.component.html",
  styleUrls: ["./users-overview.component.css"]
})
export class UsersOverviewComponent implements OnInit {
  isModuleLoaded$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  ngOnInit() {
    try {
      getModuleFactory("ContextAdminModule");
      this.isModuleLoaded$.next(true);
    } catch (error) {
      console.log(error);
    }
  }
}
