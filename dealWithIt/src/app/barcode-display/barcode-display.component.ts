import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-barcode-display',
  templateUrl: './barcode-display.component.html',
  styleUrls: ['./barcode-display.component.css']
})
export class BarcodeDisplayComponent {

  constructor(private formService: FormService) { }

  title = 'Thank You!'

  userId: string = this.formService.getID(); 
  // Property to store the user's input for generating the barcode


  
}
