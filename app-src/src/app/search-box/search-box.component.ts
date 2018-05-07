import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  airport;
  source = '';
  destination = '';
  sourceDisplay = 'none';
  destinationDisplay = 'none';
  validation = '';
  date = new Date();
  date1 = new Date();
  date2 = new Date();

  toggleSourceDisplay() {
    setTimeout(() => {
      if (this.source === '') {
        this.sourceDisplay = 'none';
      } else {
        this.sourceDisplay = '';
      }
    }, 10);
  }

  toggleDestinationDisplay() {
    setTimeout(() => {
      if (this.destination === '') {
        this.destinationDisplay = 'none';
      } else {
        this.destinationDisplay = '';
      }
    }, 10);
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please fill in all the blanks';
      return;
    }
    this.validation = '';
    this.date.setHours(this.date.getHours() + (this.date.getTimezoneOffset() / 60));
    this.http.post('/search', f.value, { responseType: 'text' }).subscribe(
      res => {
        this.source = this.destination = '';
        this.cookie.set('reload', '/search');
        this.router.navigate(['/reload']);
      });
  }

  onSubmit1(f1: NgForm) {
    if (!f1.valid) {
      this.validation = 'Please fill in all the blanks';
      return;
    }
    this.validation = '';
    this.date.setHours(this.date.getHours() + (this.date.getTimezoneOffset() / 60));
    this.http.post('/getFlightStatus', f1.value, { responseType: 'text' }).subscribe(
      res => {
        this.source = this.destination = '';
        this.cookie.set('reload', '/search');
        this.router.navigate(['/reload']);
      });
  }

  constructor(private http: HttpClient, private router: Router, private cookie: CookieService) { }
  ngOnInit() {
    this.http.get('/airport', { responseType: 'json' }).subscribe(
      res => {
        this.airport = res;
      }
    );
  }

}
