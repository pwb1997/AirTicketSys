import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  validation = '';
  type = 'customer';
  onSubmit(f: NgForm) {
    if (!f.valid) {
      if (f.value.uname === '' && f.value.passwd === '') {
        this.validation = 'Please Input Username and Password!';
        return;
      }
      if (f.value.uname === '') {
        this.validation = 'Please Input Username!';
        return;
      }
      if (f.value.passwd === '') {
        this.validation = 'Please Input Password!';
        return;
      }
    }
    this.validation = '';
    this.http.post('/login', f.value, { responseType: 'text' }).subscribe(
      res => {
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
