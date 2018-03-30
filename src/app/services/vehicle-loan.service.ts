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
      .post("https://localhost:8080/vehicleLeasings/add", vehicleLeasing)
      .toPromise();
  }

  getAllVehicleLeasingsUsers(){
    return this.http
      .get("https://localhost:8080/vehicleLeasings")
      .toPromise();
  }

}
