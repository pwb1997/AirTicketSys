import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectComponent } from './redirect/redirect.component';
import { CustomerComponent } from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';

const routes: Routes = [
  { path: '', component: RedirectComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'agent', component: AgentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
