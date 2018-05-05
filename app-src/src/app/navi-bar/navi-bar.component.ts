import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css'],
})

export class NaviBarComponent implements OnInit {
  loginState = 'visible';
  logoutState = 'hidden';
  constructor(public router: Router, private cookieService: CookieService) {
  }
  redirectGithub() { window.open('https://github.com/pwb1997/databases-final', '_blank'); }
  ngOnInit() {
    if (this.cookieService.get('pk') !== '') {
      this.loginState = 'hidden';
      this.logoutState = 'visible';
    }
  }
}
