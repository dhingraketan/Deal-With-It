import { Component } from '@angular/core';

@Component({
  selector: 'app-newline-trans-type',
  templateUrl: './newline-trans-type.component.html',
  styleUrls: ['./newline-trans-type.component.css']
})
export class NewlineTransTypeComponent {
  title = "How May I Help?";
  newLineTransType!: string;

  constructor() { }

  onSubmit(formData: any): void {
   this.newLineTransType = formData.newLineTransType;
    console.log(formData);
  }

  goBack(): void {
  }

  onNext(): void {
  }
}
