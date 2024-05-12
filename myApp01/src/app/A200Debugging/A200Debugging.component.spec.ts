/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A200DebuggingComponent } from './A200Debugging.component';

describe('A200DebuggingComponent', () => {
  let component: A200DebuggingComponent;
  let fixture: ComponentFixture<A200DebuggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A200DebuggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A200DebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
