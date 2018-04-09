import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdministratorService {

  constructor(private http: HttpClient) {
  }

  getCustomerDataForBusinessOfficer(headers) {
    return this.http
      .get('http://localhost:8080/officer/loans', headers)
      .toPromise();
  }

}
