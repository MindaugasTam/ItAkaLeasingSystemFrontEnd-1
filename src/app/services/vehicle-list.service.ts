import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable()
export class VehicleList {

  constructor(private http: HttpClient) { }

  getAllVehicleList(){
    return this.http
<<<<<<< HEAD
      .get("http://localhost:8080/vehicles")
=======
      .get("https://localhost:8080/vehicles")
>>>>>>> e5d353ed23bce0ad173c7a544b244c090d070284
      .toPromise();
  }

}
