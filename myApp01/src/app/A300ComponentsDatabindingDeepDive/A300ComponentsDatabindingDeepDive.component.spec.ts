/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A300ComponentsDatabindingDeepDiveComponent } from './A300ComponentsDatabindingDeepDive.component';

describe('A300ComponentsDatabindingDeepDiveComponent', () => {
  let component: A300ComponentsDatabindingDeepDiveComponent;
  let fixture: ComponentFixture<A300ComponentsDatabindingDeepDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A300ComponentsDatabindingDeepDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A300ComponentsDatabindingDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
