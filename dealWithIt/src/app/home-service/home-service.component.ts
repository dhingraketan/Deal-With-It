import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {

  title = "Last Question!!";
  homeService: string | null = null;
  stepId = 8;

  constructor(private formService: FormService) { }

  onSubmit() {
    if (this.homeService === 'noService') {
      this.homeService = null;
    }

    var homeService = {
      homeService: this.homeService
    }
    this.formService.saveData(homeService, this.stepId);
    this.formService.navigateToNextStep('null', this.stepId);
  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }
}
