import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditPortfolioComponent implements OnInit {
  validation = 'eg. Portfolio 1';
  color = 'white';
  exist = '';
  slugs = '';
  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please input a Valid Name!';
      this.color = '#ff9292';
    } else {
      f.value.color = f.value.color || 'white';
      this.http.post('/api/' + this.slugs + '/edit', f.value, { responseType: 'text' }).subscribe(
        res => {
          this.router.navigateByUrl('/' + this.slugs);
        },
      );
    }
  }
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.slugs = this.route.snapshot.params['pslugs'];
  }

}
