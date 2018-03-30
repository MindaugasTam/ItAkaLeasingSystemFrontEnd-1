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
      address: address
    };

    return this.http
      .post("https://leasingcourseprojectapp.herokuapp.com/privateCustomers/add", businessUser)
      .toPromise();
  }

  getAllPrivateUsers(){
    return this.http
      .get("https://leasingcourseprojectapp.herokuapp.com/privateCustomers")
      .toPromise();
  }
}
