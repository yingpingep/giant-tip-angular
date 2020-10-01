import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAComponent } from './style-a.component';

describe('StyleAComponent', () => {
  let component: StyleAComponent;
  let fixture: ComponentFixture<StyleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
