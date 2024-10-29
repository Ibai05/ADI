import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subtab1Page } from './subtab1.page';

describe('Subtab1Page', () => {
  let component: Subtab1Page;
  let fixture: ComponentFixture<Subtab1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
