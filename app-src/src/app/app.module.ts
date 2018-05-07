import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AppComponent } from './app.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component';
import { ReloadComponent } from './reload/reload.component';

@NgModule({
  declarations: [AppComponent, NaviBarComponent, ReloadComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ChartsModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
