import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaPage } from './captura.page';

describe('CapturaPage', () => {
  let component: CapturaPage;
  let fixture: ComponentFixture<CapturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
