import { Component } from '@angular/core';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent {

  title = "Last Question!!";
  homeService!: string | null;

  constructor() { }

  onSubmit(formData: any): void {
   this.homeService = formData.homeService;
    console.log(formData);
  }

  goBack(): void {
  }

}
