import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent {

  title = "Who is Your Current Provider:";
  currentProvider!: string;
  stepId = 2;

  constructor(private formService: FormService) { }

  onSubmit(formData: any): void {
   this.currentProvider = formData;
    if(this.currentProvider == "noProvider"){
      this.currentProvider = "null";
    }

    console.log(this.currentProvider);

    this.formService.navigateToNextStep(this.currentProvider, this.stepId);
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
