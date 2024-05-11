/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { B015NgClassComponent } from './B015NgClass.component';

describe('B015NgClassComponent', () => {
  let component: B015NgClassComponent;
  let fixture: ComponentFixture<B015NgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B015NgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B015NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
