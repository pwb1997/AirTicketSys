import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirTicket Reservation System';
}
