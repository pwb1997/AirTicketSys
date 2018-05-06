import { Component, OnInit } from '@angular/core';
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
  homeActive = '';
  aboutActive = '';
  searchActive = '';
  constructor(public router: Router, private cookieService: CookieService) {
  }
  redirectGithub() { window.open('https://github.com/pwb1997/databases-final', '_blank'); }
  ngOnInit() {
    if (this.cookieService.get('pk') !== '') {
      this.loginState = 'hidden';
      this.logoutState = 'visible';
    }
    this.router.events.subscribe(path => {
      if (path['url']) {
        if (path['url'].includes('home') || path['url'] === '/') {
          this.homeActive = 'underline-reveal-active';
          this.aboutActive = '';
          this.searchActive = '';
        } else if (path['url'].includes('about')) {
          this.aboutActive = 'underline-reveal-active';
          this.homeActive = '';
          this.searchActive = '';
        } else if (path['url'].includes('search')) {
          this.searchActive = 'underline-reveal-active';
          this.aboutActive = '';
          this.homeActive = '';
        } else {
          this.homeActive = '';
          this.aboutActive = '';
          this.searchActive = '';
        }
      }
    });
  }
}
