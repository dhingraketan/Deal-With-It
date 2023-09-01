import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustInfoComponent } from './cust-info/cust-info.component';
import { NewLinesQtyComponent } from './new-lines-qty/new-lines-qty.component';
import { ProviderInfoComponent } from './provider-info/provider-info.component';
import { CurrentPlanInfoComponent } from './current-plan-info/current-plan-info.component';
import { ProviderTransTypeComponent } from './provider-trans-type/provider-trans-type.component';
import { NewlineTransTypeComponent } from './newline-trans-type/newline-trans-type.component';
import { PhoneSelectionComponent } from './phone-selection/phone-selection.component';
import { DataReqComponent } from './data-req/data-req.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { BarcodeDisplayComponent } from './barcode-display/barcode-display.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'cust-info', component: CustInfoComponent },
  { path: 'new-lines-qty', component: NewLinesQtyComponent },
  { path: 'provider-info', component: ProviderInfoComponent },
  { path: 'current-plan-info', component: CurrentPlanInfoComponent },
  { path: 'provider-trans-type', component: ProviderTransTypeComponent },
  { path: 'newline-trans-type', component: NewlineTransTypeComponent },
  { path: 'phone-selection', component: PhoneSelectionComponent },
  { path: 'data-req', component: DataReqComponent },
  { path: 'home-service', component: HomeServiceComponent },
  { path: 'barcode-display', component: BarcodeDisplayComponent },
  { path: 'customer-summary', component: CustomerSummaryComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
