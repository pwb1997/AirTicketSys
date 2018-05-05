import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  message = '';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.post('/logout', null, { responseType: 'text' }).subscribe(
      res => {
        this.message = 'Logout Successfully! Redirecting You to Homepage ...';
        window.location.href = '/home';
      },
      err => {
        this.message = 'Logout Failed! Please Try Again ...';
        window.location.href = '/home';
      }
    );
  }
}
