import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IMyService, MyService, MY_SERVICE_TOKEN } from './my-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MY_SERVICE_TOKEN,
      useClass: MyService
    }
  ],
})
export class AppModule { }
