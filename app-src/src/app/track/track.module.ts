import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

const route: Routes = [{ path: '', component: TrackComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route), ChartsModule, FormsModule, DateValueAccessorModule],
  declarations: [TrackComponent]
})
export class TrackModule { }
