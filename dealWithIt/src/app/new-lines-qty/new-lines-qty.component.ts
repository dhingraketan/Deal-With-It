import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-new-lines-qty',
  templateUrl: './new-lines-qty.component.html',
  styleUrls: ['./new-lines-qty.component.css']
})
export class NewLinesQtyComponent {

  title = "How May I Help You?"
  numLines: number | undefined;
  stepId = 1;

  constructor(private formService: FormService) { }

  onSubmit(form: any): void {
    if (form.valid) {
      var newLinesQty = {
        numLines: this.numLines
      }
      this.formService.saveData(newLinesQty, this.stepId);
      this.formService.navigateToNextStep("null", this.stepId);
    }
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }
}
