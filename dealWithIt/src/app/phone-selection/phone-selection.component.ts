import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-phone-selection',
  templateUrl: './phone-selection.component.html',
  styleUrls: ['./phone-selection.component.css']
})
export class PhoneSelectionComponent {

  stepId = 6;
  title = 'Phone Selection'; // Title for the page
  selectedPhone: string | null = null; // Property to store the selected phone
  iosDevices: string[] = [
    'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro max', 'iPhone 11', 'iPhone 12', 'iPhone 13'
  ]; // List of Apple phones
  androidDevices: string[] = [
    'Samsung Galaxy S21', 'Google Pixel 7', 'Samsung Galaxy S23', 'Samsung Galaxy S22'
  ]; // List of Android phones

  constructor(private formService: FormService) { }

  // Method called when the phone selection changes
  onSelectionChange() {
    // You can access the selected phone as this.selectedPhone

    // If the user selects "Not Sure," you may want to clear the selectedPhone
    if (this.selectedPhone === 'not-sure') {
      this.selectedPhone = null;
    }

    console.log('Selected Phone:', this.selectedPhone);
  }

  onNext() {
    var phoneSelection = {
      phoneChoice: this.selectedPhone
    }
    
    this.formService.saveData(phoneSelection, this.stepId);
    this.formService.navigateToNextStep(this.selectedPhone, this.stepId);
  }

  onGoBack() {
    this.formService.navigateToPreviousStep();
  }
}
