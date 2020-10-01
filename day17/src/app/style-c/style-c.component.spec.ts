import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCComponent } from './style-c.component';

describe('StyleCComponent', () => {
  let component: StyleCComponent;
  let fixture: ComponentFixture<StyleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
