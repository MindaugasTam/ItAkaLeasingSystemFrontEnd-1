import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreService {
  leasingInfo={
    isPrivateClient:true,
    assetType:'Vehicle',
    
  };
  /*
Customer type (Business)
Asset type (Vehicle)
Make (List of car brands)
Model (Car models list based on chosen brand)
Year (When vehicle was made)
Engine power (kW)
Asset price (including VAT min 10000)
Advance payment percentage (Default min 10 %)
Advance payment amount (auto calculated based on advance payment percentage and asset price)
Lease period (months. min 6 max 84. increase by 6 months for each step)
Margin (default min 3.2 %)
Contract fee (200 EUR default min. 1% of asset price)
Payment date (15 or 30)

  */
  getLeasingInfo(){return this.leasingInfo};

}
