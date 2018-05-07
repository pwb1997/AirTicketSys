import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  type = 'flight';
  flightDisplay = '';
  airplaneDisplay = 'none';
  airportDisplay = 'none';
  topMessageDisplay = 'none';
  topMessage = '';
  topMessageBackgroundColor = '';

  toggleDisplay() {
    this.flightDisplay = 'none';
    this.airplaneDisplay = 'none';
    this.airportDisplay = 'none';
    switch (this.type) {
      case 'flight':
        this.flightDisplay = '';
        break;
      case 'airplane':
        this.airplaneDisplay = '';
        break;
      case 'airport':
        this.airportDisplay = '';
        break;
    }
  }

  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.http.post('/add/' + this.type, f.value, { responseType: 'text' }).subscribe(
      res => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '#00F6ED';
        this.topMessage = 'Successfully added new ' + this.type + '.';
      },
      err => {
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = 'orange';
        if (err.status === 401) {
          this.topMessage = 'Unauthorized operation, redirecting you to homepage ...';
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 3000);
          return;
        }
        this.topMessage = 'Failed to add new ' + this.type + ', please check your input and try again.';
      }
    );
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
