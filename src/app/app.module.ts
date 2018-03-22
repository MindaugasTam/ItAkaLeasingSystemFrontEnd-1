import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputLoanInfoComponent } from './input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from './input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from './input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from './business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from './private-user-loan-report/private-user-loan-report.component';
import {DataStoreService} from './services/data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    InputLoanInfoComponent,
    InputBusinessUserInfoComponent,
    InputPrivateUserInfoComponent,
    BusinessUserLoanReportComponent,
    PrivateUserLoanReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
  ],
<<<<<<< HEAD
  providers: [AppComponent],
=======
  providers: [DataStoreService],
>>>>>>> 036f7bf4c7f9bf19e5badbfae9806949d7fb2313
  bootstrap: [AppComponent]
})
export class AppModule { }
