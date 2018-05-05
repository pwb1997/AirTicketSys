import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'registeration', loadChildren: 'app/registeration/registeration.module#RegisterationModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'logout', loadChildren: 'app/logout/logout.module#LogoutModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
