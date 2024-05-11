/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { B008PassingDataHtmlToTsComponent } from './B008PassingDataHtmlToTs.component';

describe('B008PassingDataHtmlToTsComponent', () => {
  let component: B008PassingDataHtmlToTsComponent;
  let fixture: ComponentFixture<B008PassingDataHtmlToTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B008PassingDataHtmlToTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B008PassingDataHtmlToTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
