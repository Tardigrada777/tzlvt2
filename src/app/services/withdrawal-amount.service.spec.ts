import { TestBed } from '@angular/core/testing';

import { WithdrawalAmountService } from './withdrawal-amount.service';

describe('WithdrawalAmountService', () => {
  let service: WithdrawalAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawalAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
