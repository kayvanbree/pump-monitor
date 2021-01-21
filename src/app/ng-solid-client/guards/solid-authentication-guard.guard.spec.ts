import { TestBed } from '@angular/core/testing';

import { SolidAuthenticationGuard } from './solid-authentication-guard.service';

describe('SolidAuthenticationGuardGuard', () => {
  let guard: SolidAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SolidAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
