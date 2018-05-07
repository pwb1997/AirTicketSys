import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as md5 from 'md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  validation = '';
  type = 'customer';
  redirectionVisibility = 'hidden';
  formVisibility = 'visible';
  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.validation = '';
    f.value.password = md5(f.value.password);
    this.http.post('/login', f.value, { responseType: 'text' }).subscribe(
      res => {
        this.formVisibility = 'hidden';
        this.redirectionVisibility = 'visible';
        window.location.href = '/home';
      },
      err => {
        if (err.status === 401) {
          this.validation = 'Username or Password Not Correct!';
        }
      });
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() { }

}
