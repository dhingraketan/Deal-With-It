import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormContainerComponent } from './form-container/form-container.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormContainerComponent,
    CustInfoComponent,
    ProviderInfoComponent,
    NewLinesQtyComponent,
    CurrentPlanInfoComponent,
    ProviderTransTypeComponent,
    NewlineTransTypeComponent,
    PhoneSelectionComponent,
    DataReqComponent,
    HomeServiceComponent,
    BarcodeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
