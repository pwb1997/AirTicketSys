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
  customerDisplay = 'none';
  agentDisplay = 'none';
  message = '';
  spending = 0;
  startMonth = '';
  endMonth = '';
  startDate;
  endDate;

  commision = 0;
  ticketsSold = 0;
  averageCommision = 0;
  startDate1;
  endDate1;

  barChartOptions = {
    scaleShowVerticalLines: false, responsive: true, scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = false;
  barChartData = [{ data: [] }];

  barChart1Options = {
    scaleShowVerticalLines: false, responsive: true, scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChart1Labels = [];
  barChart1Type = 'bar';
  barChart1Legend = false;
  barChart1Data = [{ data: [] }];

  barChart2Options = {
    scaleShowVerticalLines: false, responsive: true, scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChart2Labels = [];
  barChart2Type = 'bar';
  barChart2Legend = false;
  barChart2Data = [{ data: [] }];

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

  update1() {
    setTimeout(() => {
      if (this.endDate1.getTime() > new Date().getTime()) {
        this.endDate1 = new Date();
      }
      if (this.startDate1.getTime() > this.endDate1.getTime()) {
        this.startDate1 = new Date(this.endDate1);
      }
      const filtered = this.filterDate(this.startDate1, this.endDate1);
      this.commision = this.getSpending(filtered);
      this.ticketsSold = filtered.length;
      this.averageCommision = this.commision / this.ticketsSold;
      if (this.ticketsSold === 0) {
        this.averageCommision = 0;
      }
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

  filterDate(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const result = [];
    endDate.setDate(endDate.getDate() + 1);
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

  topCustomers() {
    const result1 = {};
    const result2 = {};
    const start = new Date();
    const end = new Date();
    start.setMonth(start.getMonth() - 6);
    for (const each of this.filterDate(start, end)) {
      if (result1[each.customer_email]) {
        result1[each.customer_email] += 1;
      } else {
        result1[each.customer_email] = 1;
      }
    }
    start.setMonth(start.getMonth() - 6);
    for (const each of this.filterDate(start, end)) {
      if (result2[each.customer_email]) {
        result2[each.customer_email] += each.price * 0.1;
      } else {
        result2[each.customer_email] = each.price * 0.1;
      }
    }
    let sort1 = [];
    let sort2 = [];
    for (const each of Object.keys(result1)) {
      sort1.push([each, result1[each]]);
    }
    for (const each of Object.keys(result2)) {
      sort2.push([each, result2[each]]);
    }
    sort1.sort((a, b) => {
      return b[1] - a[1];
    });
    sort2.sort((a, b) => {
      return b[1] - a[1];
    });
    sort1 = sort1.slice(0, 5);
    sort2 = sort2.slice(0, 5);
    this.barChart1Labels = [];
    this.barChart2Labels = [];
    this.barChart1Data[0].data = [];
    this.barChart2Data[0].data = [];
    for (const each of sort1) {
      this.barChart1Labels.push(each[0]);
      this.barChart1Data[0].data.push(each[1]);
    }
    for (const each of sort2) {
      this.barChart2Labels.push(each[0]);
      this.barChart2Data[0].data.push(each[1]);
    }
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
          const start = new Date();
          const end = new Date();
          start.setMonth(start.getMonth() - 1);
          this.startDate1 = start;
          this.endDate1 = end;
          const filtered = this.filterDate(start, end);
          this.commision = this.getSpending(filtered);
          this.ticketsSold = filtered.length;
          this.averageCommision = this.commision / this.ticketsSold;
          if (this.ticketsSold === 0) {
            this.averageCommision = 0;
          }
          this.topCustomers();
        }
      );
    } else {
      this.message = 'Not authorized';
    }
  }

}
