import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

const appRoutes: Routes = [
  {
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
    path: 'new-portfolio',
    component: NewPortfolioComponent,
  },
  {
    path: ':pslugs',
    component: PortfolioComponent,
  },
  {
    path: ':pslugs/new-stock',
    component: NewStockComponent,
  },
  {
    path: ':pslugs/edit',
    component: EditPortfolioComponent,
  },
  {
    path: ':pslugs/s/:sslugs',
    component: StockComponent,
  },
  {
    path: ':pslugs/s/:sslugs/edit',
    component: EditStockComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    NewPortfolioComponent,
    PortfolioComponent,
    NewStockComponent,
    StockComponent,
    EditStockComponent,
    EditPortfolioComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
