import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { PeriodBudgetService } from '../../services/period-budget.service';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'app-period-budget-statistics',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './period-budget-statistics.component.html',
  styleUrl: './period-budget-statistics.component.css',
})
export class PeriodBudgetStatisticsComponent {
  private periodBudgetService = inject(PeriodBudgetService);

  /**
   * The current balance as a string.
   */
  balance = computed(() => this.periodBudgetService.budgetAsString());

  daysLeft = computed(() => {
    const endDate = this.periodBudgetService.period().end;
    const today = new Date();
    return differenceInCalendarDays(endDate, today);
  });
}
