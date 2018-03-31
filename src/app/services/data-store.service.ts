import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DataStoreService {

  loanFormInfo: FormGroup;
  privateUserInfo: FormGroup;
  businessUserInfo: FormGroup;

  contractFee;
  advancedPaymentAmount;

  loanResponse;

  getLoanForm(){return this.loanFormInfo};
  getLoanFormInfo(){return this.loanFormInfo.value};
  getContractFee(){return this.contractFee};
  getAdvancedPaymentAmount(){return this.advancedPaymentAmount};
  
  getPrivateUserForm(){return this.privateUserInfo};
  getPrivateUserData(){return this.privateUserInfo.value};

  getBusinessUserForm(){return this.businessUserInfo};
  getBusinessUserData(){return this.businessUserInfo.value};

  getLoanResponse(){return this.loanResponse}

  saveLoanFormInfo(form: FormGroup, contractFee, advancedPaymentAmount){
    this.contractFee=contractFee;
    this.advancedPaymentAmount=advancedPaymentAmount;
    this.loanFormInfo = form;
  }

  storeLoanResponse(response: any){
    this.loanResponse = response;
  }

  savePrivateUserFormInfo(form: FormGroup){
    this.privateUserInfo = form;
  }

  saveBusinessUserFormInfo(form: FormGroup){
    this.businessUserInfo = form;
  }

}



