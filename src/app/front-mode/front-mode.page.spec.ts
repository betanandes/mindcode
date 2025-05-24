import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontModePage } from './front-mode.page';

describe('FrontModePage', () => {
  let component: FrontModePage;
  let fixture: ComponentFixture<FrontModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
