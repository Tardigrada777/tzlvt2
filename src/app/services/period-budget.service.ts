import { computed, inject, Injectable, signal } from '@angular/core';
import { addDays, differenceInCalendarDays } from 'date-fns';
import { BudgetService } from './budget.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PeriodBudgetService extends BudgetService {
  private readonly storageService = inject(StorageService);

  readonly period = signal({
    // TODO: Make this configurable
    end: addDays(new Date(), 7),
  });

  dailyBudget = computed(() => {
    const daysLeft = differenceInCalendarDays(this.period().end, new Date());
    const balance = this.budgetAsNumber();
    return Math.round(daysLeft > 0 ? balance / daysLeft : 0);
  });

  override addTransaction(amount: number): void {
    super.addTransaction(amount);
    this.storageService.upsert(
      'periodBudget',
      Math.max(this.budgetAsNumber(), 0),
    );
  }
}
