import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'customer',
    component: RegisterCustomerComponent
  },
  {
    path: 'agent',
    component: RegisterAgentComponent
  },
  {
    path: 'staff',
    component: RegisterStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
