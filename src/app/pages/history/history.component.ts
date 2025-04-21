import { Component, computed, inject } from '@angular/core';
import { PeriodBudgetStatisticsComponent } from '../../widgets/period-budget-statistics/period-budget-statistics.component';
import { WithdrawalHistoryService } from '../../services/withdrawal-history.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [PeriodBudgetStatisticsComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  private withdrawalHistoryService = inject(WithdrawalHistoryService);
  location = inject(Location);

  items = computed(() => this.withdrawalHistoryService.historyItems());
}
