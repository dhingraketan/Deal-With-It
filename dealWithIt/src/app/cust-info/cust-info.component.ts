import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit {

  @Output() custInfoEvent: EventEmitter<any> = new EventEmitter();

  title = "Welcome!";
  name: string = '';
  phone: string = '';
  stepId = 0;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.formService.navigateToNextStep("null", this.stepId);
    } else {
      // Form is invalid, do something (e.g., show an error message).
    }
  }
}
