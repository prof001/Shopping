import { HttpService } from "./service/http.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "frontend";

  constructor(private httpService: HttpService) {
    this.getCustomers();
  }

  getCustomers() {
    this.httpService.getCustomers("customers").subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
