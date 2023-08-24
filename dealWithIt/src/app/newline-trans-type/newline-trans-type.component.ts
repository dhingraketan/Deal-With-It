import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-newline-trans-type',
  templateUrl: './newline-trans-type.component.html',
  styleUrls: ['./newline-trans-type.component.css']
})
export class NewlineTransTypeComponent {
  title = "How May I Help?";
  newLineTransType!: string;
  stepId = 5;

  constructor(private formService: FormService) { }

  onSubmit(): void {
    console.log(this.newLineTransType);
    this.formService.navigateToNextStep(this.newLineTransType, this.stepId);
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
