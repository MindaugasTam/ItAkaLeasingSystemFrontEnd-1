import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  createLoginRequest(userId, password){
    let loginRequest = {
      userId: userId,
      password: password
    };

    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/login", loginRequest)
      .toPromise();
  }

  requestPasswordChange(userId, oldPassword, newPassword){
    let passwordChangeRequest={
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

  firstTimePasswordChange(userId, newPassword){
      let firstTimeLoginPasswordRequest={
        userId: userId,
        newPassword: newPassword
      }

    return this.http
      .post("https://leasingcourseproject.herokuapp.com/customers/first/login", firstTimeLoginPasswordRequest)
      .toPromise();
  }

  existsUser(userId, email) {
    let credentialsRequest = {
      userId: userId,
      email: email
    };

    return this.http.post('http://localhost:8080/customers/check', credentialsRequest)
      .toPromise();
  }


}
