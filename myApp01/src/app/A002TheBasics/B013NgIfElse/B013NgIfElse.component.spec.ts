/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { B013NgIfElseComponent } from './B013NgIfElse.component';

describe('B013NgIfElseComponent', () => {
  let component: B013NgIfElseComponent;
  let fixture: ComponentFixture<B013NgIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B013NgIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B013NgIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
