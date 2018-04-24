import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewStockComponent implements OnInit {
  slugs = '';
  validation = 'eg. AAPL';
  color = "white";
  exist = "";
  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please input a Valid Symbol!';
      this.color = '#ff9292';
    } else {
      this.http.post('/api/' + this.slugs + "/add-stock", f.value, { responseType: 'text' }).subscribe(
        res => {
          this.router.navigateByUrl('/' + this.slugs);
        },
        err => {
          if (err.status === 400) {
            this.exist = 'Symbol Not Found, Try Another!';
            this.color = '#ff9292';
          }
        }
      );
    }
  }
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.slugs = this.route.snapshot.params['pslugs'];
  }

}
