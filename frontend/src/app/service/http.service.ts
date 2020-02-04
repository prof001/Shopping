import { CustomersModel } from "./../models/customers-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = "localhost:5000/api/v1";

  getCustomers(path: string): Observable<CustomersModel> {
    return this.httpClient.get<CustomersModel>(`${this.baseUrl}/${path}`);
  }
}
