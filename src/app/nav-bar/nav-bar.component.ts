import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('hover', [
      state('active', style({
        backgroundColor: '#ae66ae',
        color: '#333',
      })),
      state('inactive', style({
        backgroundColor: '#333',
      })),
      transition('inactive <=> active', animate('100ms')),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  // hover
  hoverState1 = 'inactive';
  hoverState2 = 'inactive';
  hoverState3 = 'inactive';
  // visibility of sign out
  loggedin = 'false';
  signoutVisibility = 'hidden';
  // hover functions
  mouseEnter1() {
    this.hoverState1 = 'active';
  }
  mouseLeave1() {
    this.hoverState1 = 'inactive';
  }
  mouseEnter2() {
    this.hoverState2 = 'active';
  }
  mouseLeave2() {
    this.hoverState2 = 'inactive';
  }
  mouseEnter3() {
    this.hoverState3 = 'active';
  }
  mouseLeave3() {
    this.hoverState3 = 'inactive';
  }
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    this.signoutVisibility = 'hidden';
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      setTimeout(() => {
        if (document.querySelectorAll('.abcRioButtonContents span')[1] !== undefined) {
          document.querySelectorAll('.abcRioButtonContents span')[1].innerHTML = 'Sign Out';
          this.signoutVisibility = 'visible';
        }
      }, 1000);
    }
  }
}
