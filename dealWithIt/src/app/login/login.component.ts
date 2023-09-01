import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username!: string;
  password!: string;
  storeNum!: number;

  constructor() { }

  ngOnInit() { }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
      storeNum: this.storeNum
    }
  }

}
