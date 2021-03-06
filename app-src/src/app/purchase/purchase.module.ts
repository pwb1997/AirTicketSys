import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseComponent } from './purchase.component';
import { Routes, RouterModule } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PurchaseComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [PurchaseComponent]
})
export class PurchaseModule { }
