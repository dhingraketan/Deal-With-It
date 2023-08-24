import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-new-lines-qty',
  templateUrl: './new-lines-qty.component.html',
  styleUrls: ['./new-lines-qty.component.css']
})
export class NewLinesQtyComponent {

  title = "How May I Help You?"
  newLinesQty!: number;
  stepId = 1;

  constructor(private formService: FormService) { }

  onSubmit(formData: any): void {
    this.newLinesQty = formData.newLinesQty;
    console.log(formData);
    this.formService.navigateToNextStep("null", this.stepId);

  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
