import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PrivateUserService {

  constructor(private http: HttpClient) { }

  createPrivateUser(firstName, lastName, privateID, email, phoneNumber, address, country){
    let businessUser = {
      firstName: firstName,
      lastName: lastName,
      privateID: privateID,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      country: country,
      customerType: "PRIVATE"
    };

    return this.http
      .post("https://localhost:8080/customers/addPrivateCustomer", businessUser)
      .toPromise();
  }

  getAllPrivateUsers(){
    return this.http
      .get("https://localhost:8080/customers")
      .toPromise();
  }
}
