import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as md5 from 'md5';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  validation = '';
  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please Fill in All the Blanks!';
      return;
    }
    this.validation = '';
    f.value.password = md5(f.value.password);
    this.http.post('/register/customer', f.value, { responseType: 'text' }).subscribe(
      res => {
        this.validation = 'Account Created, Please Login!';
        window.setTimeout(() => {
          this.router.navigate(['login']);
        }, 4000);
      },
      err => {
        if (err.status === 409) {
          this.validation = 'Email Exists, Try Another One or Login!';
        }
        if (err.status === 500) {
          this.validation = 'Registeration Failed, Please Check Your Information and Try Again!';
        }
      });
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
