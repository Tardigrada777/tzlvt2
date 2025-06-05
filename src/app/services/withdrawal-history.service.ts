import { computed, inject, Injectable, signal } from '@angular/core';
import { format, isBefore } from 'date-fns';
import { StorageService } from './storage.service';

export interface Withdrawal {
  id: string;
  amount: number;
  dateTime: Date | string;
  [key: string]: string | number | Date;
}

@Injectable({
  providedIn: 'root',
})
export class WithdrawalHistoryService {
  private transactions = signal<Withdrawal[]>([]);

  private storageService = inject(StorageService);

  readonly historyItems = computed<Withdrawal[]>(() => {
    return [...this.transactions()]
      .sort((a, b) =>
        isBefore(new Date(a.dateTime), new Date(b.dateTime)) ? 1 : -1,
      )
      .map((transaction) => ({
        ...transaction,
        dateTime: format(new Date(transaction.dateTime), 'MMM d, HH:mm'),
      }));
  });

  readonly hasItems = computed(() => this.transactions().length > 0);

  push(amount: number): void {
    const transaction: Withdrawal = {
      id: crypto.randomUUID(),
      amount: Math.abs(amount),
      dateTime: new Date(),
    };
    this.transactions.update((prev) => [...prev, transaction]);
    this.storageService.upsert('withdrawalHistory', this.transactions());
  }

  setTransactions(transactions: Withdrawal[]) {
    this.transactions.set(
      transactions.map((t) => ({
        ...t,
        dateTime: new Date(t.dateTime),
      })),
    );
  }
}
