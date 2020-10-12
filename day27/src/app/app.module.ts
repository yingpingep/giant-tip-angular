import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { ImpureFilterPipe } from './impure-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ImpureFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
