import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  slugs = '';
  loggedin = 'false';
  portfolio = {} as any;
  stocks = [];
  delete() {
    this.http.get('/api/del-portfolio/' + this.slugs, { responseType: 'text' }).subscribe(
      res => {
        this.router.navigateByUrl('/home');
      },
      err => {
        alert('Failed to Delete ' + this.slugs);
      }
    );
  }
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.slugs = this.route.snapshot.params['pslugs'];
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/portfolios/' + this.slugs, { responseType: 'text' }).subscribe(
        res => {
          this.portfolio = JSON.parse(res);
          this.stocks = this.portfolio.stocks;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
