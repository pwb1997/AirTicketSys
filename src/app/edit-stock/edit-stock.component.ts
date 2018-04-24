import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditStockComponent implements OnInit {
  pslugs = '';
  sslugs = '';
  valid1 = '';
  valid2 = '';
  color1 = 'white';
  color2 = 'white';

  onSubmit(f: NgForm) {
    if (isNaN(f.value.share)) {
      this.valid1 = 'Please Input a Valid Number';
      this.color1 = '#EF3054';
    }
    if (isNaN(f.value.basis)) {
      this.valid2 = 'Please Input a Valid Number';
      this.color2 = '#EF3054';
    }
    if (!isNaN(f.value.share) && !isNaN(f.value.basis)) {
      this.http.post('/api/' + this.pslugs + '/s/' + this.sslugs + '/edit', f.value, { responseType: 'text' }).subscribe(
        res => {
          this.router.navigateByUrl('/' + this.pslugs + '/s/' + this.sslugs);
        },
      );
    }
  }
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.pslugs = this.route.snapshot.params['pslugs'];
    this.sslugs = this.route.snapshot.params['sslugs'];
  }

}
