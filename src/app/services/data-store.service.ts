import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DataStoreService {

  loanFormInfo: FormGroup;
  privateUserInfo: FormGroup;
  businessUserInfo: FormGroup;

  getLoanForm(){return this.loanFormInfo};
  getLoanFormInfo(){return this.loanFormInfo.value};
  
  getPrivateUserForm(){return this.privateUserInfo};
  getPrivateUserData(){return this.privateUserInfo.value};

  getBusinessUserForm(){return this.businessUserInfo};
  getBusinessUserData(){return this.businessUserInfo.value};

  saveLoanFormInfo(form: FormGroup){
    this.loanFormInfo = form;
  }

  savePrivateUserFormInfo(form: FormGroup){
    this.privateUserInfo = form;
  }

  saveBusinessUserFormInfo(form: FormGroup){
    this.businessUserInfo = form;
  }

}



