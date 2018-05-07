import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    console.log(f.value);
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
