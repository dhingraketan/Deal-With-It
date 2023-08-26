import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-current-plan-info',
  templateUrl: './current-plan-info.component.html',
  styleUrls: ['./current-plan-info.component.css']
})
export class CurrentPlanInfoComponent {

  title = "Current Plan Details";
  currentMonthlyCost: number | undefined;
  currentData: number | undefined;
  stepId = 3;

  constructor(private formService: FormService) { }

  onSubmit() {
    if (this.currentMonthlyCost !== undefined && this.currentData !== undefined) {
      console.log(this.currentMonthlyCost);
      console.log(this.currentData);
      this.formService.navigateToNextStep("null", this.stepId);
    }
  }

  goBack() {
    this.formService.navigateToPreviousStep();
  }

}
