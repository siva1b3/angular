/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { B017NgForComponent } from './B017NgFor.component';

describe('B017NgForComponent', () => {
  let component: B017NgForComponent;
  let fixture: ComponentFixture<B017NgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B017NgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B017NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
