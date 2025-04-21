import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private transactions = signal<number[]>([0]);

  budgetAsNumber = computed(() => {
    return this.transactions().reduce(
      (acc, transaction) => acc + transaction,
      0,
    );
  });

  budgetAsString = computed(() =>
    Math.max(this.budgetAsNumber(), 0).toString(),
  );

  addTransaction(amount: number): void {
    this.transactions.update((prev) => [...prev, amount]);
  }

  resetTransactions(initialValue = 0): void {
    this.transactions.set([initialValue]);
  }
}
