import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';

@NgModule({
  declarations: [AppComponent, InputWrapperComponent, SliderWrapperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
