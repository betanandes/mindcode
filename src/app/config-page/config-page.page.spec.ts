import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigPagePage } from './config-page.page';

describe('ConfigPagePage', () => {
  let component: ConfigPagePage;
  let fixture: ComponentFixture<ConfigPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
