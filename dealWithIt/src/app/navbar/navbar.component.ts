import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormService } from '../form.service';
import { Rep } from '../Rep';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnInit{

  rep!: Rep;

  constructor(public formService: FormService, activatedRoute: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    
    authenticationService.repObservable.subscribe((newRep) => {
      this.rep = newRep;
    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      if(!this.isAuth){
        localStorage.removeItem("currentUserId");
      } else if(this.rep.username){
        localStorage.setItem("currentUserId", this.rep.username);
      }
    }, 500);
  }

  ngAfterViewInit(): void {
    // After the view is initialized, set the top position to bring the nav-bar down
    setTimeout(() => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      navbar.style.top = '0';
    }, 100); // Delay the animation for a smoother effect
  }

  toRepZone(){
    if(this.isAuth){
      this.formService.navigateToRepZone();
    } else {
      this.formService.navigateToLogin();
    }

  }

  logout(){
    localStorage.removeItem('currentUserId');
    this.authenticationService.logout();
  }


  get isAuth() {
    return this.rep && this.rep.username;
  }


}
