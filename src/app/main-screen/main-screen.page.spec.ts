import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainScreenPage } from './main-screen.page';

describe('MainScreenPage', () => {
  let component: MainScreenPage;
  let fixture: ComponentFixture<MainScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
