import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  upcoming = [];
  history = [];
  message = '';
  customerDisplay = 'none';
  agentDisplay = 'none';

  displayTime(datetime) {
    const date = new Date(datetime);
    return date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2);
  }

  constructor(private http: HttpClient, private cookie:CookieService) { }

  ngOnInit() {
    this.http.get('/getFlights', { responseType: 'json' }).subscribe(
      res => {
        this.upcoming = res['upcoming'];
        this.history = res['history'];
        if (this.cookie.get('type') === 'customer') {
          this.customerDisplay = '';
        } else {
          this.agentDisplay = '';
        }
      },
      err => {
        this.message = 'Not authorized, please log in as customer or booking agent';
      }
    );
  }

}
