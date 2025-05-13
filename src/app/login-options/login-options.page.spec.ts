import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginOptionsPage } from './login-options.page';

describe('LoginOptionsPage', () => {
  let component: LoginOptionsPage;
  let fixture: ComponentFixture<LoginOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
