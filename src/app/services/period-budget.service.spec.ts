import { TestBed } from '@angular/core/testing';

import { PeriodBudgetService } from './period-budget.service';

describe('PeriodBudgetService', () => {
  let service: PeriodBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
