import { Component, OnInit } from "@angular/core";

import { HttpService } from "./../shared/http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit() {
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
