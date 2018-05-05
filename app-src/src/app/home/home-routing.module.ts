import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeStaffComponent } from './home-staff/home-staff.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { HomeAgentComponent } from './home-agent/home-agent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agent', component: HomeAgentComponent },
  { path: 'customer', component: HomeCustomerComponent },
  { path: 'staff', component: HomeStaffComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
