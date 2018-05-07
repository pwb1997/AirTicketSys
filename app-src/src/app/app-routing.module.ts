import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReloadComponent } from './reload/reload.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'reload', component: ReloadComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'registeration', loadChildren: 'app/registeration/registeration.module#RegisterationModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'logout', loadChildren: 'app/logout/logout.module#LogoutModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'buy', loadChildren: 'app/purchase/purchase.module#PurchaseModule' },
  { path: 'flights', loadChildren: 'app/flights/flights.module#FlightsModule' },
  { path: 'track', loadChildren: 'app/track/track.module#TrackModule' },
  { path: 'add', loadChildren: 'app/add/add.module#AddModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
