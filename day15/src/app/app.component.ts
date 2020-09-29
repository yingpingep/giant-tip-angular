import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  someGroup: FormGroup;
  title = 'day15';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.someGroup = this.fb.group({
      aInput: new FormControl(),
    });
  }

  onSubmit(): void {
    console.log(`⚡: AppComponent -> onSumbit `, this.someGroup.value);
  }
}
