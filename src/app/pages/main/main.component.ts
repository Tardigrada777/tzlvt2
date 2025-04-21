import { Component, computed, inject, signal } from '@angular/core';
import { KeyboardComponent } from '../../widgets/keyboard/keyboard.component';
import { WithdrawalAmountComponent } from '../../widgets/withdrawal-amount/withdrawal-amount.component';
import { WithdrawalAmountService } from '../../services/withdrawal-amount.service';
import { TodayBalanceComponent } from '../../widgets/today-balance/today-balance.component';
import { PeriodBudgetStatisticsComponent } from '../../widgets/period-budget-statistics/period-budget-statistics.component';
import { BalancesService } from '../../services/balances.service';

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
  private balancesService = inject(BalancesService);

  ngOnInit() {
    this.balancesService.load();
  }

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
    this.balancesService.subtract(diff);
  }

  private handleAdd(amount: number) {
    const diff = this.withdrawalAmountService.push(amount.toString());
    this.balancesService.add(diff);
  }

  private handleReset() {
    this.withdrawalAmountService.reset();
  }
}
