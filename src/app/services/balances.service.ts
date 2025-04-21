import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PeriodBudgetService } from './period-budget.service';
import { DailyBudgetService } from './daily-budget.service';

@Injectable({
  providedIn: 'root',
})
export class BalancesService {
  private storageService = inject(StorageService);
  private periodBudgetService = inject(PeriodBudgetService);
  private dailyBudgetService = inject(DailyBudgetService);

  /**
   * Loads the current balance and daily budget from the storage.
   */
  load() {
    // Get the current balance from the storage service
    const currentBalance = this.storageService.read('periodBudget');

    if (typeof currentBalance === 'number') {
      this.periodBudgetService.resetTransactions(currentBalance);
    }

    // Get the daily budget from the storage service
    const dailyBudget = this.storageService.read('dailyBudget');

    if (typeof dailyBudget === 'number') {
      this.dailyBudgetService.resetTransactions(dailyBudget);
    }
  }

  /**
   * Subtracts the given amount from the balances.
   * @param amount The amount to subtract from the balance.
   */
  subtract(amount: number) {
    this.dailyBudgetService.addTransaction(amount);
    this.periodBudgetService.addTransaction(amount);
  }

  /**
   * Adds the given amount to the balances.
   * @param amount The amount to add to the balance.
   */
  add(amount: number) {
    this.dailyBudgetService.addTransaction(amount);
    this.periodBudgetService.addTransaction(amount);
  }
}
