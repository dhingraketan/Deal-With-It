import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // After the view is initialized, set the top position to bring the nav-bar down
    setTimeout(() => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      navbar.style.top = '0';
    }, 100); // Delay the animation for a smoother effect
  }

}
