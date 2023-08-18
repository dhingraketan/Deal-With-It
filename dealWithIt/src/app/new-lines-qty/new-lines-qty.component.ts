import { Component } from '@angular/core';

@Component({
  selector: 'app-new-lines-qty',
  templateUrl: './new-lines-qty.component.html',
  styleUrls: ['./new-lines-qty.component.css']
})
export class NewLinesQtyComponent {

  title = "How May I Help You?"
  newLinesQty!: number;

  constructor() { }

  onSubmit(formData: any): void {
    this.newLinesQty = formData.newLinesQty;
    console.log(formData);
  }

  goBack(): void {
  }

}
