import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable()
export class VehicleList {

  constructor(private http: HttpClient) { }

  getAllVehicleList(){
    return this.http
      .get("https://leasingcourseproject.herokuapp.com/vehicles")
      .toPromise();
  }

}
