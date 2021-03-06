import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PrivateUserService {

  constructor(private http: HttpClient) { }

  createPrivateUser(firstName, lastName, privateID, email, phoneNumber, address, country){
    let privateUser = {
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
      .post("http://localhost:8080/customers/addPrivateCustomer", privateUser)
      .toPromise();
  }

  getAllPrivateUsers(){
    return this.http
      .get("http://localhost:8080/customers")
      .toPromise();
  }
}
