import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit{

  @Output() custInfoEvent: EventEmitter<any> = new EventEmitter();

  title = "Welcome!";
  name!: string;
  phone!: number;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: any): void {
    this.name = formData.name;
    this.phone = formData.phone;
    console.log(formData);
    this.custInfoEvent.emit(formData);

  }


}
