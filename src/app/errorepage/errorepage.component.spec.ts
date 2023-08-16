import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorepageComponent } from './errorepage.component';

describe('ErrorepageComponent', () => {
  let component: ErrorepageComponent;
  let fixture: ComponentFixture<ErrorepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
