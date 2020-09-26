import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { B2Component } from './b2/b2.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    B2Component,
    CComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
