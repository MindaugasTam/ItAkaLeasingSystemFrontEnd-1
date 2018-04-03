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
      .post("http://localhost:8080/customers/login", loginRequest)
      .toPromise();
  }

  requestPasswordChange(userId, oldPassword, newPassword){
    let passwordChangeRequest={
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http
      .post("http://localhost:8080/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

<<<<<<< HEAD
  forgottenPassword(userId, newPassword){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: null,
        newPassword: newPassword
      };

    return this.http
      .post("http://localhost:8080/customers/change/forgot", forgotPasswordRequest)
=======
  firstTimePasswordChange(userId, newPassword){
      let firstTimeLoginPasswordRequest={
        userId: userId,
        newPassword: newPassword
      }

    return this.http
      .post("http://localhost:8080/customers/first/login", firstTimeLoginPasswordRequest)
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
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
