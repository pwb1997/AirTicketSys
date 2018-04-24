import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  name = '';
  loggedin = 'false';
  portfolios = [] as any;
  constructor(private cookieService: CookieService, private http: HttpClient) { }
  ngOnInit() {
    this.name = this.cookieService.get('username');
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/portfolios', { responseType: 'text' }).subscribe(
        res => {
          this.portfolios = JSON.parse(res);
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}
