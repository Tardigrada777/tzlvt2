import { Component, computed, inject, signal } from '@angular/core';
import { KeyboardComponent } from '../../widgets/keyboard/keyboard.component';
import { WithdrawalAmountComponent } from '../../widgets/withdrawal-amount/withdrawal-amount.component';
import { WithdrawalAmountService } from '../../services/withdrawal-amount.service';
import { TodayBalanceComponent } from '../../widgets/today-balance/today-balance.component';
import { DailyBudgetService } from '../../services/daily-budget.service';
import { PeriodBudgetStatisticsComponent } from '../../widgets/period-budget-statistics/period-budget-statistics.component';
import { PeriodBudgetService } from '../../services/period-budget.service';

@Component({
  selector: 'app-main',
  imports: [
    KeyboardComponent,
    WithdrawalAmountComponent,
    TodayBalanceComponent,
    PeriodBudgetStatisticsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  private withdrawalAmountService = inject(WithdrawalAmountService);
  private dailyBudgetService = inject(DailyBudgetService);
  private periodBudgetService = inject(PeriodBudgetService);

  ngOnInit() {
    this.periodBudgetService.resetTransactions(16000);
    this.dailyBudgetService.resetTransactions(
      this.periodBudgetService.dailyBudget(),
    );
  }

  /**
   * The withdrawal amount as a string.
   */
  withdrawalAmount = computed(() =>
    this.withdrawalAmountService.amountAsString(),
  );

  onKeyClick(key: string | number) {
    if (typeof key === 'string') {
      if (key === '<') {
        this.handleSubtract();
      } else if (key === '=') {
        // TODO: Handle submit key logic here
        this.handleReset();
      }
      return;
    }

    this.handleAdd(key);
  }

  private handleSubtract() {
    const diff = this.withdrawalAmountService.pop();
    this.dailyBudgetService.addTransaction(diff);
    this.periodBudgetService.addTransaction(diff);
  }

  private handleAdd(amount: number) {
    const diff = this.withdrawalAmountService.push(amount.toString());
    this.dailyBudgetService.addTransaction(diff);
    this.periodBudgetService.addTransaction(diff);
  }

  private handleReset() {
    this.withdrawalAmountService.reset();
  }
}
