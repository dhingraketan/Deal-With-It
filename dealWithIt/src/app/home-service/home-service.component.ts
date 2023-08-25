import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {

  title = "Last Question!!";
  homeService!: string | null;
  stepId = 8;

  constructor(private formService: FormService) { }

  onSubmit() {
    console.log(this.homeService);
    this.formService.navigateToNextStep('null', this.stepId);

  }

  goBack(): void {
    this.formService.navigateToPreviousStep();
  }

}
