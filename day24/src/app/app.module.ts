import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { HelperDirective } from './helper.directive';
import { HelloComponent } from './hello/hello.component';
import { NgModelStatus } from './ng-model-status.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    HelperDirective,
    HelloComponent,
    NgModelStatus,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
