/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { A103UserDataComponent } from './A103UserData.component';

describe('A103UserDataComponent', () => {
  let component: A103UserDataComponent;
  let fixture: ComponentFixture<A103UserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A103UserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A103UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
