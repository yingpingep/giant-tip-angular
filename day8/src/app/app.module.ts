import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent, MULTI_TOKEN } from './app.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: MULTI_TOKEN,
      multi: true,
      useValue: 'FIRST'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
