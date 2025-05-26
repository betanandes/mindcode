import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullModePage } from './full-mode.page';

describe('FullModePage', () => {
  let component: FullModePage;
  let fixture: ComponentFixture<FullModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FullModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
