import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit{

  constructor(private formService: FormService) {
    this.formService.setCurrentStep(0);
  }
  ngOnInit(): void {
    this.formService.setCurrentStep(0);
  }

}
