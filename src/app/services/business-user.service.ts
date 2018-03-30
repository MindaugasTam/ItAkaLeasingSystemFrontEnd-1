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
    }



    return this.http
<<<<<<< HEAD
      .post("http://localhost:8080/customers/addBusinessCustomer", businessUser)
=======
      .post("https://localhost:8080/customers/addBusinessCustomer", businessUser)
>>>>>>> e5d353ed23bce0ad173c7a544b244c090d070284
      .toPromise();

  }

  getAllBusinessUsers(){
    return this.http
<<<<<<< HEAD
      .get("http://localhost:8080/customers")
=======
      .get("https://localhost:8080/customers")
>>>>>>> e5d353ed23bce0ad173c7a544b244c090d070284
      .toPromise();
  }
}