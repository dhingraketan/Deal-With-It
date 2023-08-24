// src/app/form.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  getParentStep(): number | undefined {
    console.log(this.path[this.path.length - 1]);
    return this.path.pop();
  }

  setCurrentStep(step: number): void {
    this.router.navigate([this.steps[step]]);
  }

  navigateToNextStep(userInput: string, currentStepIndex: number): void {
    if (currentStepIndex == 0 || currentStepIndex == 1 || currentStepIndex == 3
      || currentStepIndex == 6 || currentStepIndex == 7 || currentStepIndex == 8) {
      this.path.push(currentStepIndex);
      currentStepIndex++;
      this.router.navigate([this.steps[currentStepIndex]]);

    } else if (currentStepIndex == 2) {
      if (userInput == "null") {
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
      } else if (userInput == "AAL") {
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
}
