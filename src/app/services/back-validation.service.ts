import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Http} from '@angular/http';
=======
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721

@Injectable()
export class BackValidationService {

<<<<<<< HEAD
  constructor(private http: Http) { }

  checkEmailUnique(email){
    return this.http
      .get("http://localhost:8080/customers/" + email)
      .toPromise();
  }
=======
  constructor() { }

  existsEmail(email){

  }

>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
}
