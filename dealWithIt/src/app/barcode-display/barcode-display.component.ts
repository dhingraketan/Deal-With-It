import { Component } from '@angular/core';

@Component({
  selector: 'app-barcode-display',
  templateUrl: './barcode-display.component.html',
  styleUrls: ['./barcode-display.component.css']
})
export class BarcodeDisplayComponent {

  title = 'Thank You!'

  userId: string = '6725151210'; 
  // Property to store the user's input for generating the barcode


  
}
