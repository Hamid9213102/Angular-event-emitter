import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySignupComponent } from './lazy-signup.component';

describe('LazySignupComponent', () => {
  let component: LazySignupComponent;
  let fixture: ComponentFixture<LazySignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
