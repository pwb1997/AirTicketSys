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
  topMessageDisplay = 'none';
  topMessage = '';
  topMessageBackgroundColor = '';
  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.validation = '';
    f.value.password = md5(f.value.password);
    this.http.post('/login', f.value, { responseType: 'text' }).subscribe(
      res => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '#00F6ED';
        this.topMessage = 'Successfully logged in, redirecting you to home page ...';
        window.location.href = '/home';
      },
      err => {
        if (err.status === 401) {
          this.topMessageDisplay = '';
          this.topMessageBackgroundColor = 'orange';
          this.topMessage = 'Username or password not correct.';
        }
      });
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() { }

}
