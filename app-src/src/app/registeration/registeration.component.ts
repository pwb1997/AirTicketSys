import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as md5 from 'md5';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  type = 'customer';
  customerDisplay = '';
  staffDisplay = 'none';
  agentDisplay = 'none';
  topMessageDisplay = 'none';
  topMessage = '';
  topMessageBackgroundColor = '';

  toggleDisplay() {
    this.customerDisplay = 'none';
    this.staffDisplay = 'none';
    this.agentDisplay = 'none';
    switch (this.type) {
      case 'customer':
        this.customerDisplay = '';
        break;
      case 'airline_staff':
        this.staffDisplay = '';
        break;
      case 'booking_agent':
        this.agentDisplay = '';
        break;
    }
  }

  onSubmitCustomer(customer: NgForm) {
    if (customer.invalid) {
      return;
    }
    customer.value.password = md5(customer.value.password);
    this.http.post('/registeration/customer', customer.value, { responseType: 'text' }).subscribe(
      res => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '#00F6ED';
        this.topMessage = 'Account created, redirecting you to login ...';
        window.setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      },
      err => {
        if (err.status === 409) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Email exists, try another one or login directly';
        }
        if (err.status === 500) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Registeration failed, please check your information and try again';
        }
      });
  }

  onSubmitStaff(staff: NgForm) {
    if (staff.invalid) {
      return;
    }
    staff.value.password = md5(staff.value.password);
    this.http.post('/registeration/staff', staff.value, { responseType: 'text' }).subscribe(
      res => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '#00F6ED';
        this.topMessage = 'Account created, redirecting you to login ...';
        window.setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      },
      err => {
        if (err.status === 409) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Email exists, try another one or login directly';
        }
        if (err.status === 500) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Registeration failed, please check your information and try again';
        }
      });
  }

  onSubmitAgent(agent: NgForm) {
    if (agent.invalid) {
      return;
    }
    agent.value.password = md5(agent.value.password);
    this.http.post('/registeration/agent', agent.value, { responseType: 'text' }).subscribe(
      res => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '#00F6ED';
        this.topMessage = 'Account created, redirecting you to login ...';
        window.setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      },
      err => {
        if (err.status === 409) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Email exists, try another one or login directly';
        }
        if (err.status === 500) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Registeration failed, please check your information and try again';
        }
      });
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

}
