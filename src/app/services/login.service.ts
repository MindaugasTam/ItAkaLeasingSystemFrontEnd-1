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
      .post("http://localhost:8060/customers/login", loginRequest)
      .toPromise();
  }

  requestPasswordChange(userId, oldPassword, newPassword){
    let passwordChangeRequest={
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http
      .post("http://localhost:8060/customers/change/password", passwordChangeRequest)
      .toPromise();
  }

  forgottenPassword(userId, newPassword){
      let forgotPasswordRequest={
        userId: userId,
        oldPassword: null,
        newPassword: newPassword
      };

    return this.http
      .post("http://localhost:8060/customers/change/forgot", forgotPasswordRequest)
      .toPromise();
  }

  existsUser(userId, email) {
    let credentialsRequest = {
      userId: userId,
      email: email
    };

    return this.http.post("http://localhost:8060/customers/check", credentialsRequest)
      .toPromise();
  }


}
