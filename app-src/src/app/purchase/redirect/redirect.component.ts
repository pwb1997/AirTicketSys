import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  message = '';
  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit() {
    const type = this.cookie.get('type');
    if (type === 'customer') {
      this.router.navigate(['/buy/customer']);
    } else if (type === 'booking_agent') {
      this.router.navigate(['/buy/agent']);
    } else if (type === 'airline_staff') {
      this.message = 'You cannot buy tickets as an airline staff, redirecting you to the home page ...';
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 2000);
    } else {
      this.message = 'You are not logged in yet, redirecting you to the loggin page ...';
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
    }
  }

}
