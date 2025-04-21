import { Component, computed, inject } from '@angular/core';
import { DailyBudgetService } from '../../services/daily-budget.service';

@Component({
  selector: 'app-today-balance',
  imports: [],
  templateUrl: './today-balance.component.html',
  styleUrl: './today-balance.component.css',
})
export class TodayBalanceComponent {
  private dailyBudgetService = inject(DailyBudgetService);

  /**
   * The current balance as a string.
   */
  balance = computed(() => this.dailyBudgetService.budgetAsString());
}
