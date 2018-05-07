import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForm, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterationComponent } from './registeration.component';

const routes: Routes = [{ path: '', component: RegisterationComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [RegisterationComponent]
})
export class RegisterationModule { }
