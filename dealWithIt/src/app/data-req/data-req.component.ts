import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-data-req',
  templateUrl: './data-req.component.html',
  styleUrls: ['./data-req.component.css']
})
export class DataReqComponent {

  title = "How May I Help?";
  dataAmount!: number | null; // Property to store the user's input
  notSure: boolean = false; // Property to store whether the user is not sure
  stepId = 7;

  constructor(private formService: FormService) { }

  // Method called when the number input changes
  onInputChange(dataAmount: any) {
    // You can access the entered number as this.dataAmount
    if(this.notSure){
      this.dataAmount = null;
    } else {
      this.dataAmount = dataAmount;
    }


    console.log('Data Amount:', this.dataAmount);
  }

  // Method called when the "Not Sure" checkbox changes
  onNotSureChange() {
    // You can access the "Not Sure" state as this.notSure
    console.log('Not Sure:', this.notSure);

    // If the user selects "Not Sure," you may want to clear the dataAmount
    if (this.notSure) {
      this.dataAmount = null;
    }

    console.log('Data Amount:', this.dataAmount);
  }
 
  onNext(): void {
    this.formService.navigateToNextStep('null', this.stepId);
  }
   
  goBack(): void {
    this.formService.navigateToPreviousStep();
  }
}
