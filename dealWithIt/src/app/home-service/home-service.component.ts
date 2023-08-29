import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {

  title = "Last Question!!";
  homeService: string | null = null;
  stepId = 8;
  rawData: any;
  userID!: string;

  constructor(private formService: FormService, private customerService: CustomerService) { }

  async onSubmit() {
    try {
      if (this.homeService === 'noService') {
        this.homeService = null;
      }

      const homeService = {
        homeService: this.homeService
      };

      await this.formService.saveData(homeService, this.stepId);

      const customer: Customer = this.formService.getCustomer();

      // Assuming this.customerService.addCustomer() returns a Promise
      const data = await this.customerService.addCustomer(customer).subscribe((data: any) => {
        this.rawData = data;
        this.userID = this.rawData.userID;

        if (this.userID) {
          this.formService.saveID(this.userID);

          this.formService.navigateToNextStep('null', this.stepId);
        } else {
          console.error('userID is undefined.');
        }

      });

    } catch (error) {
      console.error('Error:', error);
    }
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
