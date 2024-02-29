import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App0202Component } from './app0202.component';

describe('App0202Component', () => {
  let component: App0202Component;
  let fixture: ComponentFixture<App0202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App0202Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App0202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
