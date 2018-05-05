import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LogoutComponent } from './logout.component';

const routes: Routes = [{ path: '', component: LogoutComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
