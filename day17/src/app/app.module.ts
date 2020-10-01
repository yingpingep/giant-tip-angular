import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleAComponent } from './style-a/style-a.component';
import { StyleBComponent } from './style-b/style-b.component';
import { StyleCComponent } from './style-c/style-c.component';
import { AnchorDirective } from './anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleAComponent,
    StyleBComponent,
    StyleCComponent,
    AnchorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
