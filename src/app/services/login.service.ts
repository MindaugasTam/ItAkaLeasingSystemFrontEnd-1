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

}
