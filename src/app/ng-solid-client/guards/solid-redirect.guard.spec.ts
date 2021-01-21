import { TestBed } from '@angular/core/testing';

import { SolidRedirectGuard } from './solid-redirect.guard';

describe('SolidRedirectGuard', () => {
  let guard: SolidRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SolidRedirectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
