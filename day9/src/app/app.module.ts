import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EchoEvent } from './custom-event.service';

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
      provide: EVENT_MANAGER_PLUGINS,
      useClass: EchoEvent,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
