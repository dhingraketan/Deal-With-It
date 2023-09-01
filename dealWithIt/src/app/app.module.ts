import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustInfoComponent } from './cust-info/cust-info.component';
import { ProviderInfoComponent } from './provider-info/provider-info.component';
import { NewLinesQtyComponent } from './new-lines-qty/new-lines-qty.component';
import { CurrentPlanInfoComponent } from './current-plan-info/current-plan-info.component';
import { ProviderTransTypeComponent } from './provider-trans-type/provider-trans-type.component';
import { NewlineTransTypeComponent } from './newline-trans-type/newline-trans-type.component';
import { PhoneSelectionComponent } from './phone-selection/phone-selection.component';
import { DataReqComponent } from './data-req/data-req.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { BarcodeDisplayComponent } from './barcode-display/barcode-display.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
import { LoginComponent } from './login/login.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { InputContainerComponent } from './input-container/input-container.component';
// import { TextInputComponent } from './path-to-text-input-component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustInfoComponent,
    ProviderInfoComponent,
    NewLinesQtyComponent,
    CurrentPlanInfoComponent,
    ProviderTransTypeComponent,
    NewlineTransTypeComponent,
    PhoneSelectionComponent,
    DataReqComponent,
    HomeServiceComponent,
    BarcodeDisplayComponent,
    CustomerSummaryComponent,
    LoginComponent,
    TextInputComponent,
    DefaultButtonComponent,
    InputValidationComponent,
    InputContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BarcodeGeneratorAllModule,
    QRCodeGeneratorAllModule,
    DataMatrixGeneratorAllModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
