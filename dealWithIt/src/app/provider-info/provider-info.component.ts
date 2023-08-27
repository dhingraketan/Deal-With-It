import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent {

  title = "Who is Your Current Provider:";
  provider: string | null = null;
  stepId = 2;

  constructor(private formService: FormService) { }

  onSubmit(): void {
    if (this.provider === 'noProvider') {
      this.provider = null;
    }

    var providerInfo = {
      currentProvider: this.provider
    }
    this.formService.saveData(providerInfo, this.stepId);
    this.formService.navigateToNextStep(this.provider, this.stepId);
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }
}
