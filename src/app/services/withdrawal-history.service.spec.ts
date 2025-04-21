import { TestBed } from '@angular/core/testing';

import { WithdrawalHistoryService } from './withdrawal-history.service';

describe('WithdrawalHistoryService', () => {
  let service: WithdrawalHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawalHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
