import { TestBed } from '@angular/core/testing';
import { DailyBudgetService } from './daily-budget.service';

describe('DailyBudgetService', () => {
  let service: DailyBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
