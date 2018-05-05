import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { NgForm, FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  imports: [CommonModule, FormsModule, DateValueAccessorModule],
  declarations: [SearchBoxComponent, FilterPipe],
  exports: [FormsModule, SearchBoxComponent]
})
export class SearchBoxModule { }
