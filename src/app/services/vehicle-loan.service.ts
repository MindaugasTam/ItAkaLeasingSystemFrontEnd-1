import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable()
export class VehicleLoanService {

  constructor(private http: HttpClient) { }

  createVehicleLeasing(manufacturer, model, manufacturingDate, enginePower, advancePaymentPercent, advancePaymentAmount,
                       leasingPeriod, margin, contractFee, assetPrice, paymentDate, customerID){
    let vehicleLeasing = {
      manufacturer: manufacturer,
      model: model,
      manufacturingDate: manufacturingDate,
      enginePower: enginePower,
      advancePaymentPercent: advancePaymentPercent,
      advancePaymentAmount: advancePaymentAmount,
      leasingPeriod: leasingPeriod,
      margin: margin,
      contractFee: contractFee,
      assetPrice: assetPrice,
      paymentDate: paymentDate,
      customerID: customerID
    };

    return this.http
<<<<<<< HEAD
      .post("http://localhost:8080/vehicleLeasings/add", vehicleLeasing)
=======
      .post("https://localhost:8080/vehicleLeasings/add", vehicleLeasing)
>>>>>>> e5d353ed23bce0ad173c7a544b244c090d070284
      .toPromise();
  }

  getAllVehicleLeasingsUsers(){
    return this.http
<<<<<<< HEAD
      .get("http://localhost:8080/vehicleLeasings")
=======
      .get("https://localhost:8080/vehicleLeasings")
>>>>>>> e5d353ed23bce0ad173c7a544b244c090d070284
      .toPromise();
  }

}
