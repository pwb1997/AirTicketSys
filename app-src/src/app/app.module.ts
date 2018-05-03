import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
import {
  FormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';
import {
  AppComponent
} from './app.component';
import {
  NaviBarComponent
} from './navi-bar/navi-bar.component';
import {
  HomeComponent
} from './home/home.component';
import {
  AboutComponent
} from './about/about.component';
import {
  LoginComponent
} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const appRoutes: Routes = [{
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NaviBarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    RegisterStaffComponent,
    RegisterAgentComponent,
    RegisterCustomerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
