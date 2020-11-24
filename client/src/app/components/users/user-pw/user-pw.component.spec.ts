import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPwComponent } from './user-pw.component';

describe('UserPwComponent', () => {
  let component: UserPwComponent;
  let fixture: ComponentFixture<UserPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
