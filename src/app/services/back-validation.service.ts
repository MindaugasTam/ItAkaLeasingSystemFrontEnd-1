import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BackValidationService {

  constructor(private http: Http) { }

  checkEmailUnique(email){
    return this.http
      .get("http://localhost:8060/customers/" + email)
      .toPromise();
  }
}
