import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Customer } from '../Customer';
import { TransType } from '../TransType';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit{
  customer: Customer = {
    id: 0,
    name: "",
    phoneNum: 0,
    currentProvider: "",
    monthlyBill: 0,
    currentData: 0,
    numLines: 0,
    transType: TransType.HUP,
    phoneChoice: "",
    dataChoice: 0,
    homeService: ""
  }

  constructor(private formService: FormService) {
    this.formService.setCurrentStep(0);
  }
  ngOnInit(): void {
    this.formService.setCurrentStep(0);
  }

  addCustInfo(formData: any): void {
    this.customer.name = formData.name;
    this.customer.phoneNum = formData.phone;
    // this.formService.navigateToNextStep("", 0);
  }


}
