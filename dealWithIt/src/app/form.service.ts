// src/app/form.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private steps: string[] =
    [
      'cust-info', 'new-lines-qty', 'provider-info', 'current-plan-info', 'provider-trans-type',
      'newline-trans-type', 'phone-selection', 'data-req', 'home-service', 'barcode-display'
    ];
  private path: number[] = [];

  private customer: Customer = {
    name: "",
    phoneNum: 0,
    currentProvider: null,
    monthlyBill: null,
    currentData: null,
    numLines: 0,
    transType: "",
    phoneChoice: null,
    dataChoice: null,
    homeService: null
  }

  private providerTransType: string | null = null;
  private newlineTransType: string | null = null;
  private userID!: string;

  constructor(private router: Router) { }

  getParentStep(): number | undefined {
    console.log(this.path[this.path.length - 1]);
    return this.path.pop();
  }

  setCurrentStep(step: number): void {
    this.router.navigate([this.steps[step]]);
  }

  navigateToNextStep(userInput: string | null, currentStepIndex: number): void {
    if (currentStepIndex == 0 || currentStepIndex == 1 || currentStepIndex == 3
      || currentStepIndex == 6 || currentStepIndex == 7 || currentStepIndex == 8) {
      this.path.push(currentStepIndex);
      currentStepIndex++;
      this.router.navigate([this.steps[currentStepIndex]]);

    } else if (currentStepIndex == 2) {
      if (userInput == null) {
        this.path.push(currentStepIndex);
        currentStepIndex = 5;
        this.router.navigate([this.steps[currentStepIndex]]);
      } else {
        this.path.push(currentStepIndex);
        currentStepIndex++;
        this.router.navigate([this.steps[currentStepIndex]]);
      }

    } else if (currentStepIndex == 4) {
      if (userInput == "HUP") {
        this.path.push(currentStepIndex);
        currentStepIndex = 6;
        this.router.navigate([this.steps[currentStepIndex]]);
      } else if (userInput == "AAL" || userInput == "NAC") {
        this.path.push(currentStepIndex);
        currentStepIndex = 5;
        this.router.navigate([this.steps[currentStepIndex]]);
      }

    } else if (currentStepIndex == 5) {
      if (userInput == "FIN") {
        this.path.push(currentStepIndex);
        currentStepIndex = 6;
        this.router.navigate([this.steps[currentStepIndex]]);
      } else if (userInput == "BYOD") {
        this.path.push(currentStepIndex);
        currentStepIndex = 7;
        this.router.navigate([this.steps[currentStepIndex]]);
      }
    }

    console.log(this.path);
  }

  navigateToPreviousStep(): void {
    var parent = this.getParentStep();
    console.log(parent);

    if (typeof parent === 'number' && parent >= 0) {
      this.router.navigate([this.steps[parent]]);
    } else {
      console.error('Invalid parent step or undefined parent.');
    }
  }

  navigateToRepZone(): void {
    this.router.navigate(['customer-summary']);
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

  saveData(data: any, stepId: number): void | Customer {

    if (stepId == 0) {
      this.customer.name = data.name;
      this.customer.phoneNum = data.phone;

    } else if (stepId == 1) {
      this.customer.numLines = data.numLines;

    } else if (stepId == 2) {
      this.customer.currentProvider = data.currentProvider;

    } else if (stepId == 3) {
      this.customer.monthlyBill = data.monthlyBill;
      this.customer.currentData = data.currentData;

    } else if (stepId == 4) {
      this.providerTransType = data.providerTransType;

    } else if (stepId == 5) {
      this.newlineTransType = data.type;
    } else if (stepId == 6) {
      this.customer.phoneChoice = data.phoneChoice;

    } else if (stepId == 7) {
      this.customer.dataChoice = data.dataChoice;

    } else if (stepId == 8) {
      this.customer.homeService = data.homeService;

      if (this.providerTransType == null) {
      
        if (this.newlineTransType == "FIN") {
          this.customer.transType = "NAC_FIN";

        } else if (this.newlineTransType == "BYOD") {
          this.customer.transType = "NAC_BYOD";
        }
      } else if (this.providerTransType == "HUP") {
        this.customer.transType = "HUP";

      } else if (this.providerTransType == "AAL") {
        if (this.newlineTransType == "FIN") {
          this.customer.transType = "AAL_FIN";

        } else if (this.newlineTransType == "BYOD") {
          this.customer.transType = "AAL_BYOD";
        }
      } else if (this.providerTransType == "NAC") {
        if (this.newlineTransType == "FIN") {
          this.customer.transType = "NAC_FIN";

        } else if (this.newlineTransType == "BYOD") {
          this.customer.transType = "NAC_BYOD";
        }
      }
    }
  }

  getCustomer(): Customer {
    return this.customer;
  }

  saveID(userID: string): void {
    this.userID = userID;
    console.log(this.userID);
  }

  getID(): string {
    return this.userID;
  }

}
