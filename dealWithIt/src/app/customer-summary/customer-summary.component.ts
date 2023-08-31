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

  constructor(private customerService: CustomerService) { }

  getCustomer() {
    this.customerService.getCustomer(this.customerId).subscribe((data: any) => {
      this.customer = data;
      console.log(this.customer);
    });
  }

  goBack(){
    this.customer = null;
  }


}
