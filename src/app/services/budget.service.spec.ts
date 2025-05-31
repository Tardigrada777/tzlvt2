import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initial state', () => {
    it('should return 0 for budgetAsNumber', () => {
      expect(service.budgetAsNumber()).toBe(0);
    });

    it('should return "0" for budgetAsString', () => {
      expect(service.budgetAsString()).toBe('0');
    });
  });

  describe('addTransaction', () => {
    it('should update budget correctly for a single positive transaction', () => {
      service.addTransaction(100);
      expect(service.budgetAsNumber()).toBe(100);
      expect(service.budgetAsString()).toBe('100');
    });

    it('should update budget correctly for a single negative transaction', () => {
      service.addTransaction(100); // Initial positive transaction
      service.addTransaction(-50);
      expect(service.budgetAsNumber()).toBe(50);
      expect(service.budgetAsString()).toBe('50');
    });

    it('should update budget correctly for multiple transactions', () => {
      service.addTransaction(50);
      service.addTransaction(-20);
      service.addTransaction(30);
      expect(service.budgetAsNumber()).toBe(60);
      expect(service.budgetAsString()).toBe('60');
    });
  });

  describe('resetTransactions', () => {
    it('should reset budget to 0 when no argument is provided', () => {
      service.addTransaction(100);
      service.addTransaction(-50);
      service.resetTransactions();
      expect(service.budgetAsNumber()).toBe(0);
      expect(service.budgetAsString()).toBe('0');
    });

    it('should reset budget to the provided value', () => {
      service.addTransaction(50);
      service.addTransaction(20);
      service.resetTransactions(75);
      expect(service.budgetAsNumber()).toBe(75);
      expect(service.budgetAsString()).toBe('75');
    });
  });

  describe('negative budget', () => {
    it('should handle initial negative budget correctly', () => {
      service.resetTransactions(-100);
      expect(service.budgetAsNumber()).toBe(-100);
      expect(service.budgetAsString()).toBe('0');
    });

    it('should handle positive transaction that results in a negative budget correctly', () => {
      service.resetTransactions(-100);
      service.addTransaction(50);
      expect(service.budgetAsNumber()).toBe(-50);
      expect(service.budgetAsString()).toBe('0');
    });

    it('should handle positive transaction that results in a positive budget correctly', () => {
      service.resetTransactions(-50);
      service.addTransaction(70);
      expect(service.budgetAsNumber()).toBe(20);
      expect(service.budgetAsString()).toBe('20');
    });
  });
});
