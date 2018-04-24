import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare const TradingView: any;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StockComponent implements OnInit {
  pslugs = '';
  sslugs = '';
  loggedin = '';
  stock = {} as any;
  delete() {
    this.http.get('/api/del-stock/' + this.pslugs + '/' + this.sslugs, { responseType: 'text' }).subscribe(
      res => {
        this.router.navigateByUrl('/' + this.pslugs);
      },
      err => {
        alert('Failed to Delete ' + this.sslugs);
      }
    );
  }

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.pslugs = this.route.snapshot.params['pslugs'];
    this.sslugs = this.route.snapshot.params['sslugs'];
    this.loggedin = this.cookieService.get('loggedin');
    if (this.loggedin === 'true') {
      this.http.get('/api/stocks/' + this.pslugs + '/' + this.sslugs, { responseType: 'text' }).subscribe(
        res => {
          this.stock = JSON.parse(res);
          const widget = new TradingView.widget({
            'container_id': 'technical-analysis',
            'width': 998,
            'height': 610,
            'symbol': this.stock.symbol,
            'interval': 'D',
            'timezone': 'exchange',
            'theme': 'Light',
            'style': '1',
            'toolbar_bg': '#f1f3f6',
            'withdateranges': true,
            'hide_side_toolbar': false,
            'allow_symbol_change': true,
            'save_image': false,
            'hideideas': true,
            'studies': ['ROC@tv-basicstudies',
              'StochasticRSI@tv-basicstudies',
              'MASimple@tv-basicstudies'
            ],
            'show_popup_button': false,
            'popup_width': '1000',
            'popup_height': '650'
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
