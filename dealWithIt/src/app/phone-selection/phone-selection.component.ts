import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { NgForm } from '@angular/forms'; // Import NgForm
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-phone-selection',
  templateUrl: './phone-selection.component.html',
  styleUrls: ['./phone-selection.component.css']
})
export class PhoneSelectionComponent implements OnInit{

  stepId = 6;
  title = 'Phone Selection'; // Title for the page
  selectedPhone: string | null = null; // Property to store the selected phone
  iosDevices: string[] = [ ]; 
  androidDevices: string[] = []; 

  constructor(private formService: FormService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getIosPhones().subscribe((data: any) => {
      this.iosDevices = data;
    });

    this.customerService.getAndroidPhones().subscribe((data: any) => {
      this.androidDevices = data;
    });
  }

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
