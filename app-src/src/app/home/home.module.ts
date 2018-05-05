import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForm, FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeAgentComponent } from './home-agent/home-agent.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { HomeStaffComponent } from './home-staff/home-staff.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomeComponent, HomeAgentComponent, HomeCustomerComponent, HomeStaffComponent],
})
export class HomeModule { }
