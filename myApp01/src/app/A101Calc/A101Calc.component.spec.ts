/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A101CalcComponent } from './A101Calc.component';

describe('A101CalcComponent', () => {
  let component: A101CalcComponent;
  let fixture: ComponentFixture<A101CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A101CalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A101CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
