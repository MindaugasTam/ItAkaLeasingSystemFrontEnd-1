import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputLoanInfoComponent } from './input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from './input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from './input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from './business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from './private-user-loan-report/private-user-loan-report.component';

const routes: Routes = [
    {
      path: '',
            component: InputLoanInfoComponent,
    },
    {
      path: 'input-business-user-info',
            component: InputLoanInfoComponent,
    },
    {
      path: 'input-private-user-info',
            component: InputPrivateUserInfoComponent,
    },
    {
      path: 'business-user-loan-report',
            component: BusinessUserLoanReportComponent,
    },
    {
      path: 'private-user-loan-report',
            component: PrivateUserLoanReportComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
