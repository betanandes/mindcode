import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackModePage } from './back-mode.page';

describe('BackModePage', () => {
  let component: BackModePage;
  let fixture: ComponentFixture<BackModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BackModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
