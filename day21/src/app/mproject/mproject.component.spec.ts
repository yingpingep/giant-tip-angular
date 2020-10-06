import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MprojectComponent } from './mproject.component';

describe('MprojectComponent', () => {
  let component: MprojectComponent;
  let fixture: ComponentFixture<MprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
