import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent {

  title = "Who is Your Current Provider:";
  currentProvider!: string;

  constructor() { }

  onSubmit(formData: any): void {
   this.currentProvider = formData.currentProvider;
    console.log(formData);
  }

  goBack(): void {
  }

}
