import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBComponent } from './style-b.component';

describe('StyleBComponent', () => {
  let component: StyleBComponent;
  let fixture: ComponentFixture<StyleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
