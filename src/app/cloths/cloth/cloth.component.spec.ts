/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClothComponent } from './cloth.component';

describe('ClothComponent', () => {
  let component: ClothComponent;
  let fixture: ComponentFixture<ClothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
