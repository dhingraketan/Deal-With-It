import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent {

  title = 'Customer Summary';
  customerId = '';
  customer!: Customer | null;
  transTypeDisplay = '';

  constructor(private customerService: CustomerService) { }

  getCustomer() {
    this.customerService.getCustomer(this.customerId).subscribe((data: any) => {
      this.customer = data;
      this.customer!.name = String(this.customer!.name).toUpperCase();
      if (this.customer!.currentProvider) {
        this.customer!.currentProvider = String(this.customer!.currentProvider).toUpperCase();
      }

      if (this.customer!.homeService) {
        this.customer!.homeService = String(this.customer!.homeService).toUpperCase();
      }

      if (this.customer!.transType == "HUP") {
        this.transTypeDisplay = "Hardware Upgrade on Existing Line (HUP)";

      } else if (this.customer!.transType == "NAC_FIN") {
        this.transTypeDisplay = "New Activation with Phone (NAC_FIN)";

      } else if (this.customer!.transType == "NAC_BYOD") {
        this.transTypeDisplay = "New BYOP Activation (NAC_BYOP)";

      } else if (this.customer!.transType == "AAL_BYOD") {
        this.transTypeDisplay = "Add a BYOP Line (AAL_BYOP)";

      } else if (this.customer!.transType == "AAL_FIN") {
        this.transTypeDisplay = "Add a Line with new phone (AAL_FIN)";
      }
    });
  }

  goBack() {
    this.customer = null;
  }


}
