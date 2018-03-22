import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {
  leasingInfo={
    isPrivateClient:true,
    assetType:'Vehicle',
    vehicleMake:'Vehicle Make',
    vehicleModel:'Vehicle Model',
    vehicleYear:'2000',
    enginePower:235,
    assetPrice:1,
    paymentPercantage:100,
    advancedPaymentAmount:10,
    leasePeriod:6,
    margin:10,
    contractFee:200,
    paymentDate:15,
  };
  getLeasingInfo(){return this.leasingInfo};
  pushData(){}

}



