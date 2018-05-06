import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { RedirectComponent } from './redirect/redirect.component';
import { CustomerComponent } from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
  declarations: [RedirectComponent, CustomerComponent, AgentComponent]
})
export class PurchaseModule { }
