import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(private formService: FormService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      storeNum: ['', Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.authenticationService.login({username:this.fc['username'].value,
    password:this.fc['password'].value, storeNum:this.fc['storeNum'].value}).subscribe((res: any) => {
      localStorage.setItem("currentUserId", res.username);
      this.formService.navigateToRepZone();
    }); 
  }
}
