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
  staffDisplay = 'none';
  listDetail = 'Show Detail';
  detailDisplay = 'none';
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

  staffTicketsSoldMonthly = [];
  staffTicketsSoldYearly = [];
  staffCommision = [];
  staffCustomer = [];
  staffDetail;
  detailEmail = '';
  staffTicketsSold = 0;
  startDate2;
  endDate2;
  revenueMonth = 0;
  revenueYear = 0;
  destination3 = [];
  destination1 = [];

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

  barChart3Options = {
    scaleShowVerticalLines: false, responsive: true, scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChart3Labels = [];
  barChart3Type = 'bar';
  barChart3Legend = false;
  barChart3Data = [{ data: [] }];

  barChart4Labels = ['direct sales', 'indirect sales'];
  barChart4Type = 'doughnut';
  barChart4Data = [];
  barChart5Labels = ['direct sales', 'indirect sales'];
  barChart5Type = 'doughnut';
  barChart5Data = [];
  doughnutChartColors = [{ backgroundColor: ['#b8436d', '#00d9f9', '#a4c73c', '#a4add3'] }];

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

  update2() {
    setTimeout(() => {
      if (this.endDate2.getTime() > new Date().getTime()) {
        this.endDate2 = new Date();
        this.endDate2.setDate(2);
      }
      if (this.startDate2.getTime() > this.endDate2.getTime()) {
        this.startDate2 = new Date(this.endDate2);
      }
      this.updateStaffChart(this.startDate2, this.endDate2);
      this.staffTicketsSold = this.filterMonth(this.startDate2, this.endDate2).length;
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

  updateStaffChart(startMonth, endMonth) {
    const start = new Date(startMonth);
    const end = new Date(endMonth);
    start.setDate(2);
    end.setDate(2);
    this.barChart3Labels = [];
    this.barChart3Data[0].data = [];
    while (end.getTime() >= start.getTime()) {
      this.barChart3Labels.push(this.date2Month(start.getTime()));
      this.barChart3Data[0].data.push(this.filterMonth(start.getTime(), start.getTime()).length);
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

  topAgents(tickets) {
    const result1 = {};
    const result2 = {};
    for (const each of tickets) {
      if (each.email !== null) {
        if (result1[each.email]) {
          result1[each.email] += 1;
        } else {
          result1[each.email] = 1;
        }
        if (result2[each.email]) {
          result2[each.email] += each.price * 0.1;
          result2[each.email] = Math.round(result2[each.email] * 100) / 100;
        } else {
          result2[each.email] = each.price * 0.1;
          result2[each.email] = Math.round(result2[each.email] * 100) / 100;
        }
      }
    }
    const sort1 = [];
    const sort2 = [];
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
    return [sort1.slice(0, 5), sort2.slice(0, 5)];
  }

  frequentCustomers(tickets) {
    const result1 = {};
    for (const each of tickets) {
      if (each.customer_email !== null) {
        if (result1[each.customer_email]) {
          result1[each.customer_email] += 1;
        } else {
          result1[each.customer_email] = 1;
        }
      }
    }
    const sort1 = [];
    for (const each of Object.keys(result1)) {
      sort1.push([each, result1[each]]);
    }
    sort1.sort((a, b) => {
      return b[1] - a[1];
    });
    return sort1.slice(0, 5);
  }

  getRevenueShare(tickets) {
    let direct = 0;
    let indirect = 0;
    for (const each of tickets) {
      if (each.booking_agent_id !== null) {
        indirect += each.price;
      } else {
        direct += each.price;
      }
    }
    return [direct, indirect];
  }

  showCustomerDetail(email) {
    this.detailDisplay = '';
    this.detailEmail = email;
    this.http.post('/getCustomer', { 'email': email }, { responseType: 'json' }).subscribe(
      res => {
        this.staffDetail = res;
      }
    );
  }

  getDestination() {
    const start = new Date();
    const end = new Date();
    start.setMonth(start.getMonth() - 3);
    const result1 = {};
    const result2 = {};
    for (const each of this.filterDate(start, end)) {
      if (result1[each.airport_city]) {
        result1[each.airport_city] += 1;
      } else {
        result1[each.airport_city] = 1;
      }
    }
    start.setMonth(start.getMonth() - 9);
    for (const each of this.filterDate(start, end)) {
      console.log(each.airport);
      if (result2[each.airport_city]) {
        result2[each.airport_city] += 1;
      } else {
        result2[each.airport_city] = 1;
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
    sort1 = sort1.slice(0, 3);
    sort2 = sort2.slice(0, 3);
    this.destination3 = sort1;
    this.destination1 = sort2;
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
          console.log(this.tickets);
          start.setMonth(start.getMonth() - 1);
          this.startDate1 = start;
          this.endDate1 = end;
          const filtered = this.filterDate(start, end);
          this.commision = this.getCommision(filtered);
          this.ticketsSold = filtered.length;
          this.averageCommision = this.commision / this.ticketsSold;
          if (this.ticketsSold === 0) {
            this.averageCommision = 0;
          }
          this.topCustomers();
        }
      );
    } else if (this.type === 'airline_staff') {
      this.staffDisplay = '';
      this.http.get('/getFlights').subscribe(
        res => {
          for (const each of res['history']) {
            this.tickets.push(each);
          }
          for (const each of res['upcoming']) {
            this.tickets.push(each);
          }
          console.log(this.tickets)
          const start = new Date();
          const end = new Date();
          start.setMonth(start.getMonth() - 1);
          let filtered = this.filterDate(start, end);
          this.staffTicketsSoldMonthly = this.topAgents(filtered)[0];
          this.barChart4Data = this.getRevenueShare(filtered);
          this.revenueMonth = this.getSpending(filtered);
          start.setMonth(start.getMonth() - 11);
          filtered = this.filterDate(start, end);
          this.barChart5Data = this.getRevenueShare(filtered);
          this.revenueYear = this.getSpending(filtered);
          [this.staffTicketsSoldYearly, this.staffCommision] = this.topAgents(filtered);
          this.staffCustomer = this.frequentCustomers(filtered);
          this.startDate2 = start;
          this.endDate2 = end;
          this.staffTicketsSold = filtered.length;
          this.updateStaffChart(start.getTime(), new Date().getTime());
          this.getDestination();
        }
      );
    } else {
      this.message = 'Not authorized';
    }
  }

}
