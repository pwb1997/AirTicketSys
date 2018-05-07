import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  tickets = [];
  type = '';
  customerDisplay = 'hidden';
  agentDisplay = '';
  message = '';
  spending = 0;
  startMonth = '';
  endMonth = '';
  startDate;
  endDate;

  barChartOptions = { scaleShowVerticalLines: false, responsive: true };
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = false;
  barChartData = [{ data: [] }];

  update() {
    setTimeout(() => {
      if (this.endDate.getTime() > new Date().getTime()) {
        this.endDate = new Date();
        this.endDate.setDate(2);
      }
      if (this.startDate.getTime() > this.endDate.getTime()) {
        this.startDate = new Date(this.endDate);
      }
      this.startMonth = this.date2Month(this.startDate);
      this.endMonth = this.date2Month(this.endDate);
      this.updateChart(this.startMonth, this.endMonth);
      this.spending = this.getSpending(this.filterMonth(this.startMonth, this.endMonth));
    }, 10);
  }

  date2Month(d) {
    const date = new Date(d);
    return date.getFullYear() + '-' +
      ('00' + (date.getMonth() + 1)).slice(-2);
  }

  filterMonth(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const result = [];
    endDate.setMonth(endDate.getMonth() + 1);
    for (const each of this.tickets) {
      const date = new Date(each.purchase_date);
      if (date.getTime() <= endDate.getTime() && date.getTime() > startDate.getTime()) {
        result.push(each);
      }
    }
    return result;
  }

  updateChart(startMonth, endMonth) {
    const start = new Date(startMonth);
    const end = new Date(endMonth);
    start.setDate(2);
    end.setDate(2);
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    while (end.getTime() >= start.getTime()) {
      this.barChartLabels.push(this.date2Month(start.getTime()));
      this.barChartData[0].data.push(this.getSpending(this.filterMonth(start.getTime(), start.getTime())));
      start.setMonth(start.getMonth() + 1);
    }
  }

  getSpending(tickets) {
    let result = 0;
    for (const each of tickets) {
      result += each.price;
    }
    return result;
  }

  getCommision(tickets) {
    return this.getSpending(tickets) * 0.1;
  }

  getAverageCommision(tickets) {
    return this.getCommision(tickets) / tickets.length;
  }

  onSubmit(f: NgForm) {

  }

  constructor(private cookie: CookieService, private http: HttpClient) { }

  ngOnInit() {
    this.type = this.cookie.get('type');
    if (this.type === 'customer') {
      this.customerDisplay = '';
      this.http.get('/getFlights').subscribe(
        res => {
          for (const each of res['history']) {
            this.tickets.push(each);
          }
          for (const each of res['upcoming']) {
            this.tickets.push(each);
          }
          const start = new Date();
          start.setDate(2);
          start.setMonth(start.getMonth() - 5);
          this.updateChart(start.getTime(), new Date().getTime());
          const end = new Date();
          end.setDate(2);
          start.setMonth(start.getMonth() - 6);
          this.spending = this.getSpending(this.filterMonth(start, end));
          this.startMonth = this.date2Month(start);
          this.endMonth = this.date2Month(end);
          this.startDate = start;
          this.endDate = end;
        }
      );
    } else if (this.type === 'booking_agent') {
      this.agentDisplay = '';
      this.http.get('/getFlights').subscribe(
        res => {
          for (const each of res['history']) {
            this.tickets.push(each);
          }
          for (const each of res['upcoming']) {
            this.tickets.push(each);
          }
        }
      );
    } else {
      this.message = 'Not authorized';
    }
  }

}
