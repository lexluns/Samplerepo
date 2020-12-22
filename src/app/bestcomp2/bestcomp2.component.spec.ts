import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestcomp2Component } from './bestcomp2.component';

describe('Bestcomp2Component', () => {
  let component: Bestcomp2Component;
  let fixture: ComponentFixture<Bestcomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bestcomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bestcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
