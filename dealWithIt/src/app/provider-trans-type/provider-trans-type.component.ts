import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-trans-type',
  templateUrl: './provider-trans-type.component.html',
  styleUrls: ['./provider-trans-type.component.css']
})
export class ProviderTransTypeComponent {

  title = "How May I Help?";
  providerTransType!: string;

  constructor() { }

  onSubmit(formData: any): void {
   this.providerTransType = formData.providerTransType;
    console.log(formData);
  }

  goBack(): void {
  }

}
