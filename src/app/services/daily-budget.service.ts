import { computed, Injectable, signal } from '@angular/core';
import { BudgetService } from './budget.service';

@Injectable({
  providedIn: 'root',
})
export class DailyBudgetService extends BudgetService {}
