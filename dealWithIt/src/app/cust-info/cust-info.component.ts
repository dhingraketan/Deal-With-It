import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit {

  title = "Welcome!";
  name: string = '';
  phone: string = '';
  stepId = 0;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.valid) {
      var custInfo = {
        name: this.name,
        phone: this.phone
      }
      
      this.formService.saveData(custInfo, this.stepId);
      this.formService.navigateToNextStep("null", this.stepId);
    }
  }
}
