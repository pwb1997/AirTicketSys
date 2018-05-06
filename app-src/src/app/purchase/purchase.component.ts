import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  message = '';
  purchaseMessage = '';
  purchaseDisplay = 'none';
  customerEmailDisplay = 'none';
  result = [];

  displayTime(datetime) {
    const date = new Date(datetime);
    return date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2);
  }

  getTicketInfo() {
    this.http.post('/ticket', { 'buyTicket': this.cookie.get('buyTicket') }, { responseType: 'json' }).subscribe(
      res => {
        this.result.push(res);
      }
    );
  }

  onSubmit(f: NgForm) {
    if (this.result[0].remain === 0) {
      this.purchaseMessage = 'No remaining tickets, please find another flight';
      return;
    }
    if (this.cookie.get('type') === 'booking_agent' && f.value.customer_email === '') {
      this.purchaseMessage = 'Please input the customer email';
      return;
    }
    [f.value.airline_name, f.value.flight_num] = this.cookie.get('buyTicket').split('/');
    this.purchaseMessage = '';
    this.http.post('/buy', f.value, { responseType: 'text', withCredentials: true }).subscribe(
      res => {
        this.purchaseMessage = 'Purchase successfully, redirecting you previous page ...';
        setTimeout(() => {
          this.router.navigate(['search']);
        }, 3000);
      },
      err => {
        if (err.status === 401) {
          this.purchaseMessage = 'No remaining tickets, please find another flight';
        } else if (err.status === 402) {
          this.purchaseMessage = 'Authentication failed, please make sure you are logged in as customer or booking agent';
        } else if (err.status === 403) {
          this.purchaseMessage = 'Customer not found, please enter a valid email address';
        } else {
          this.purchaseMessage = 'Purchase failed, please try again';
        }
      }
    );
  }

  constructor(private cookie: CookieService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const type = this.cookie.get('type');
    if (this.cookie.get('buyTicket') === '') {
      this.message = 'No flight selected, redirecting you to the search page ...';
      setTimeout(() => {
        this.router.navigate(['search']);
      }, 3000);
    } else if (type === 'customer') {
      this.purchaseDisplay = '';
      this.getTicketInfo();
    } else if (type === 'booking_agent') {
      this.purchaseDisplay = '';
      this.getTicketInfo();
      this.customerEmailDisplay = '';
    } else if (type === 'airline_staff') {
      this.message = 'You cannot buy tickets as an airline staff, redirecting you to the home page ...';
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 3000);
    } else {
      this.message = 'You are not logged in yet, redirecting you to the loggin page ...';
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 3000);
    }
  }

}
