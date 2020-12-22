import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestcomp1Component } from './bestcomp1.component';

describe('Bestcomp1Component', () => {
  let component: Bestcomp1Component;
  let fixture: ComponentFixture<Bestcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bestcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bestcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
