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
  private path: number[] = [0];

  constructor(private router: Router) { }

  getParentStep(): number | undefined {
    return this.path.pop()
  }

  setCurrentStep(step: number): void {
    this.router.navigate([this.steps[step]]);
  }

  navigateToNextStep(userInput: string, currentStepIndex: number): void {
    if (currentStepIndex == 0 || currentStepIndex == 1 || currentStepIndex == 3
      || currentStepIndex == 6 || currentStepIndex == 7 || currentStepIndex == 8) {
      currentStepIndex++;
      this.path.push(currentStepIndex);
      this.router.navigate([this.steps[currentStepIndex]]);

    } else if (currentStepIndex == 2) {
      if (userInput == "null") {
        currentStepIndex = 5;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      } else {
        currentStepIndex++;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      }

    } else if (currentStepIndex == 4) {
      if (userInput == "HUP") {
        currentStepIndex = 6;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      } else if (userInput == "AAL") {
        currentStepIndex = 5;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      }

    } else if (currentStepIndex == 5) {
      if (userInput == "FIN") {
        currentStepIndex = 6;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      } else if (userInput == "BYOD") {
        currentStepIndex = 7;
        this.path.push(currentStepIndex);
        this.router.navigate([this.steps[currentStepIndex]]);
      }
    }
  }

  navigateToPreviousStep(): void {
    var parent = this.getParentStep();

    if (typeof parent === 'number' && parent >= 0 && parent < this.steps.length) {
      this.router.navigate([this.steps[parent]]);
    } else {
      console.error('Invalid parent step or undefined parent.');
    }
  }
}
