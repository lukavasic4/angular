import { TestBed } from '@angular/core/testing';

import { IfauthorizedGuard } from './ifauthorized.guard';

describe('IfauthorizedGuard', () => {
  let guard: IfauthorizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IfauthorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
