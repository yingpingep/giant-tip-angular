import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { DotComponent } from './dot/dot.component';

@NgModule({
  declarations: [
    HelloComponent,
    WorldComponent,
    DotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
