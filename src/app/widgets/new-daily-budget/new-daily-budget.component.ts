import { Component, computed, inject } from '@angular/core';
import { DailyBudgetService } from '../../services/daily-budget.service';
import { PeriodBudgetService } from '../../services/period-budget.service';

@Component({
  selector: 'app-new-daily-budget',
  imports: [],
  templateUrl: './new-daily-budget.component.html',
  styleUrl: './new-daily-budget.component.css',
})
export class NewDailyBudgetComponent {
  private dailyBudgetService = inject(DailyBudgetService);
  private periodBudgetService = inject(PeriodBudgetService);

  dailyBudget = computed(() =>
    Math.max(0, this.dailyBudgetService.budgetAsNumber()),
  );
  periodDailyBudget = computed(() => this.periodBudgetService.dailyBudget());
}
