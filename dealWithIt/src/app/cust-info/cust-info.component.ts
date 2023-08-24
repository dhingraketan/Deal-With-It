import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit{

  @Output() custInfoEvent: EventEmitter<any> = new EventEmitter();

  title = "Welcome!";
  name!: string;
  phone!: number;
  stepId = 0;
  

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any): void {
    this.name = formData.name;
    this.phone = formData.phone;
    console.log(formData);
    this.formService.navigateToNextStep("null", this.stepId);

  }


}
