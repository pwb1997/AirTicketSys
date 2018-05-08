import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

const routes: Routes = [
  { path: '', component: FlightsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, DateValueAccessorModule],
  declarations: [FlightsComponent]
})
export class FlightsModule { }
