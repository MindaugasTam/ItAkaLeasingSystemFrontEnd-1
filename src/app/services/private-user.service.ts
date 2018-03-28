import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PrivateUserService {

  constructor(private http: HttpClient) { }

  createPrivateUser(firstName, lastName, privateID, email, phoneNumber, address){
    let businessUser = {
      firstName: firstName,
      lastName: lastName,
      privateID: privateID,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      customerType: "PRIVATE"
    };

    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/addPrivateCustomer", businessUser)
      .toPromise();
  }

  getAllPrivateUsers(){
    return this.http
      .get("https://leasingcourseproject.herokuapp.com/customers")
      .toPromise();
  }
}
