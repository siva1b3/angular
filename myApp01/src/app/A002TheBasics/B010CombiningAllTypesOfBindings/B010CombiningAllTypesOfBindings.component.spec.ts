/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { B010CombiningAllTypesOfBindingsComponent } from './B010CombiningAllTypesOfBindings.component';

describe('B010CombiningAllTypesOfBindingsComponent', () => {
  let component: B010CombiningAllTypesOfBindingsComponent;
  let fixture: ComponentFixture<B010CombiningAllTypesOfBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B010CombiningAllTypesOfBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B010CombiningAllTypesOfBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
