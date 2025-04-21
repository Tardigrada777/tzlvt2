import { computed, inject, Injectable, signal } from '@angular/core';
import { BudgetService } from './budget.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DailyBudgetService extends BudgetService {
  private readonly storageService = inject(StorageService);

  override addTransaction(amount: number): void {
    super.addTransaction(amount);
    this.storageService.upsert(
      'dailyBudget',
      Math.max(this.budgetAsNumber(), 0),
    );
  }
}
