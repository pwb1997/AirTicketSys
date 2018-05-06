import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result;
  message = '';
  displaySearchBox = '';
  displayResult = 'none';

  displayTime(datetime) {
    const date = new Date(datetime);
    return date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2);
  }

  buyTicket(airline_name, flight_num) {
    this.cookie.set('buyTicket', airline_name + '/' + flight_num);
    this.router.navigate(['buy'])
  }

  deleteCookie() {
    this.cookie.delete('searchResult');
    this.cookie.set('reload', 'search');
    this.router.navigate(['reload']);
  }

  constructor(public router: Router, private cookie: CookieService) { }
  ngOnInit() {
    if (this.cookie.get('searchResult')) {
      this.result = JSON.parse(this.cookie.get('searchResult').slice(2));
      this.message = 'Found ' + this.result.length + ' record(s)';
      this.displaySearchBox = 'none';
      this.displayResult = '';
    }
  }
}
