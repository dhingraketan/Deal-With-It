import { Component } from '@angular/core';

@Component({
  selector: 'app-current-plan-info',
  templateUrl: './current-plan-info.component.html',
  styleUrls: ['./current-plan-info.component.css']
})
export class CurrentPlanInfoComponent {

  title = "Current Plan Details";
  currentMonthlyCost!: number;
  currentData!: number; 

  constructor() { }

  onSubmit(formData: any) {
    this.currentMonthlyCost = formData.currentMonthlyCost;
    this.currentData = formData.currentData;
    console.log("Form submitted");
  }

  goBack() {
    
  }
  

}
