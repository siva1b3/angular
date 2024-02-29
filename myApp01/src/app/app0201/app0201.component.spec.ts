import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App0201Component } from './app0201.component';

describe('App0201Component', () => {
  let component: App0201Component;
  let fixture: ComponentFixture<App0201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App0201Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App0201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
