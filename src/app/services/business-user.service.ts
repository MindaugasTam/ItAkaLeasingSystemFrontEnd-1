import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BusinessUserService {

  constructor(private http: HttpClient) { }

  createBusinessUser(companyID, companyName, email, phoneNumber, address, country){
    let businessUser = {
      companyID: companyID,
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      country: country,
      customerType: "BUSINESS"
    };



    return this.http
      .post("http://localhost:8080/customers/addBusinessCustomer", businessUser)
      .toPromise();

  }

  getAllBusinessUsers(){
    return this.http
      .get("http://localhost:8080/customers")
      .toPromise();
  }


}
