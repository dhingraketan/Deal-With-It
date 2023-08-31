import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'dealWithIt';

  constructor(private formService: FormService) {
    this.formService.setCurrentStep(0);
  }
  ngOnInit(): void {
    this.formService.setCurrentStep(0);
  }
}
