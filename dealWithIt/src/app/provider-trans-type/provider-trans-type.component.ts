import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-provider-trans-type',
  templateUrl: './provider-trans-type.component.html',
  styleUrls: ['./provider-trans-type.component.css']
})
export class ProviderTransTypeComponent {

  title = "How May I Help?";
  providerTransType!: string;
  stepId = 4;

  constructor(private formService: FormService) { }

  onSubmit(): void {
   this.providerTransType
    console.log(this.providerTransType);
    this.formService.navigateToNextStep(this.providerTransType, this.stepId);
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
