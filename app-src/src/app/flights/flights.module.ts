import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FlightsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [FlightsComponent]
})
export class FlightsModule { }
