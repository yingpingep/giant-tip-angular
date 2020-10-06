import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BDirective } from './b.directive';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BDirective,
    CComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
