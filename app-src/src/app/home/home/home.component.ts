import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    const type = this.cookieService.get('type');
    if (type === 'customer') {
      this.router.navigate(['/home/customer']);
    } else if (type === 'airline_staff') {
      this.router.navigate(['/home/staff']);
    } else if (type === 'booking_agent') {
      this.router.navigate(['/home/agent']);
    }
  }

}
