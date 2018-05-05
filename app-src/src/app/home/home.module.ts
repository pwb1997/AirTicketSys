import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SearchBoxModule } from '../search-box/search-box.module';

import { NgForm, FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HomeAgentComponent } from './home-agent/home-agent.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { HomeStaffComponent } from './home-staff/home-staff.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, SearchBoxModule],
  declarations: [HomeComponent, HomeAgentComponent, HomeCustomerComponent, HomeStaffComponent],
})
export class HomeModule { }
