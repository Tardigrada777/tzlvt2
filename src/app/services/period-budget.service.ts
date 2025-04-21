import { computed, Injectable, signal } from '@angular/core';
import { addDays, differenceInCalendarDays } from 'date-fns';
import { BudgetService } from './budget.service';

@Injectable({
  providedIn: 'root',
})
export class PeriodBudgetService extends BudgetService {
  readonly period = signal({
    end: addDays(new Date(), 7),
  });

  dailyBudget = computed(() => {
    const daysLeft = differenceInCalendarDays(this.period().end, new Date());
    const balance = this.budgetAsNumber();
    return Math.round(daysLeft > 0 ? balance / daysLeft : 0);
  });
}
