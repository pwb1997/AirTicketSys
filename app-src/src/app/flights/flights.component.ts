import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  upcoming = [];
  history = [];
  tickets;
  flights;
  filtered = [];
  message = '';
  customerDisplay = 'none';
  agentDisplay = 'none';
  staffDisplay = 'none';
  startDate;
  endDate;
  status = 'upcoming';

  detailDisplay = 'none';
  flightDisplay = '';
  detailNum = '';
  customers = '';

  detail(flight) {
    this.detailDisplay = '';
    this.flightDisplay = 'none';
    this.customers = '';
    this.detailNum = flight.flight_num;
    for (const each of this.tickets) {
      if (each.flight_num === flight.flight_num) {
        this.customers += each.customer_email + ', ';
      }
    }
  }

  onSubmit(f: NgForm) {
    this.http.post('/changeStatus', { 'flight_num': this.detailNum, 'status': this.status }).subscribe(
      res => {
        this.message = 'Status updated';
        this.ngOnInit();
      },
      err => {
        if (err.status === '401') {
          this.message = 'Unauthorized operation';
        } else {
          this.message = 'Failed to update status';
        }
      }
    );
  }

  displayTime(datetime) {
    const date = new Date(datetime);
    return date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2);
  }

  update() {
    setTimeout(() => {
      this.filtered = [];
      const result = {};
      const startTime = this.startDate.getTime();
      const end = new Date(this.endDate);
      end.setDate(end.getDate() + 1);
      const endTime = end.getTime();
      for (const each of this.flights) {
        const deptime = new Date(each.departure_time).getTime();
        if (deptime <= endTime && deptime > startTime) {
          this.filtered.push(each);
        }
      }
    }, 10);
  }

  constructor(private http: HttpClient, private cookie: CookieService) { }

  ngOnInit() {
    this.http.get('/getFlights', { responseType: 'json' }).subscribe(
      res => {
        this.upcoming = res['upcoming'];
        this.history = res['history'];
        if (this.cookie.get('type') === 'customer') {
          this.customerDisplay = '';
        } else if (this.cookie.get('type') === 'booking_agent') {
          this.agentDisplay = '';
        } else {
          this.staffDisplay = '';
          this.tickets = [];
          this.flights = [];
          this.tickets = res['tickets'];
          this.flights = res['flights'];
          this.startDate = new Date();
          this.endDate = new Date();
          this.endDate.setMonth(this.endDate.getMonth() + 1);
          this.update();
        }
      },
      err => {
        this.message = 'Not authorized';
      }
    );
  }

}
