import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForm, FormsModule } from '@angular/forms';

import { RegisterationRoutingModule } from './registeration-routing.module';

import { RegisterComponent } from './register/register.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';

@NgModule({
  imports: [CommonModule, RegisterationRoutingModule, FormsModule],
  declarations: [RegisterComponent, RegisterAgentComponent, RegisterCustomerComponent, RegisterStaffComponent]
})
export class RegisterationModule { }
