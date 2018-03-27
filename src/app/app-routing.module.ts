import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputLoanInfoComponent } from './input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from './input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from './input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from './business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from './private-user-loan-report/private-user-loan-report.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: '',
            component: HomeComponent,
    },
    {
      path: 'input-loan-info',
            component: InputLoanInfoComponent,
    },
    {
      path: 'input-business-user-info',
            component: InputBusinessUserInfoComponent,
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
    {
      path: 'login',
            component: LoginComponent,
    },
    {
      path: 'home',
            component: HomeComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
