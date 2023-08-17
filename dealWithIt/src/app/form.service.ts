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
  private currentStepIndex: number = 0;
  private path: number[] = [0];

  constructor(private router: Router) { }

  getCurrentStep(): string {
    return this.steps[this.currentStepIndex];
  }

  getParentStep(): number | undefined {
    return this.path.pop()
  }

  navigateToNextStep(userInput: string): void {
    if (this.currentStepIndex == 0 || this.currentStepIndex == 1 || this.currentStepIndex == 3
      || this.currentStepIndex == 6 || this.currentStepIndex == 7 || this.currentStepIndex == 8) {
      this.currentStepIndex++;
      this.path.push(this.currentStepIndex);
      this.router.navigate([this.steps[this.currentStepIndex]]);

    } else if (this.currentStepIndex == 2) {
      if (userInput == "null") {
        this.currentStepIndex = 5;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
      } else {
        this.currentStepIndex++;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
      }

    } else if (this.currentStepIndex == 4) {
      if (userInput == "HUP") {
        this.currentStepIndex = 6;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
      } else if (userInput == "AAL") {
        this.currentStepIndex = 5;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
      }

    } else if (this.currentStepIndex == 5) {
      if (userInput == "FIN") {
        this.currentStepIndex = 6;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
      } else if (userInput == "BYOD") {
        this.currentStepIndex = 7;
        this.path.push(this.currentStepIndex);
        this.router.navigate([this.steps[this.currentStepIndex]]);
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
