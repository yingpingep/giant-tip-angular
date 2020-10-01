import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MULTI_TOKEN } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: MULTI_TOKEN,
      useValue: 'What the fuck'
    }
  ]
})
export class IsModule { }
