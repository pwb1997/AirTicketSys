import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchBoxModule } from '../search-box/search-box.module';

import { SearchComponent } from './search.component';

const routes: Routes = [{ path: '', component: SearchComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SearchBoxModule],
  declarations: [SearchComponent]
})
export class SearchModule { }
