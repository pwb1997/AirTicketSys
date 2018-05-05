import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  airport;
  source = '';
  destination = '';
  sourceDisplay = '';
  destinationDisplay = '';
  validation = '';
  date = new Date();

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.validation = 'Please Fill in All the Blanks!';
      return;
    }
    this.validation = '';
    this.date.setHours(this.date.getHours() + (this.date.getTimezoneOffset() / 60));
    this.http.post('/search', f.value, { responseType: 'text' }).subscribe(
      res => {
      },
      err => {
        if (err.status === 404) {
          this.validation = 'No Result Found!';
        }
      });
  }

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.date.setHours(this.date.getHours() - (this.date.getTimezoneOffset() / 60));
    this.http.get('/airport', { responseType: 'json' }).subscribe(
      res => {
        this.airport = res;
      }
    );
  }

}
