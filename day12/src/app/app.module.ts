import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydirDirective } from './mydir.directive';
import { AComponent } from './a/a.component';

@NgModule({
  declarations: [
    AppComponent,
    MydirDirective,
    AComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
