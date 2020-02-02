import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { CustomersModel } from "./models/customers-model";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  apiUrl = "localhost:5000/api/v1";

  constructor(private httpClient: HttpClient) {}

  getCustomers(route: string): Observable<CustomersModel> {
    return this.httpClient.get<CustomersModel>(`${this.apiUrl}/${route}`);
  }
}
