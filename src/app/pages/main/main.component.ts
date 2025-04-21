import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { KeyboardComponent } from '../../widgets/keyboard/keyboard.component';
import { WithdrawalAmountComponent } from '../../widgets/withdrawal-amount/withdrawal-amount.component';
import { WithdrawalAmountService } from '../../services/withdrawal-amount.service';
import { TodayBalanceComponent } from '../../widgets/today-balance/today-balance.component';
import { PeriodBudgetStatisticsComponent } from '../../widgets/period-budget-statistics/period-budget-statistics.component';
import { BalancesService } from '../../services/balances.service';
import { NewDailyBudgetComponent } from '../../widgets/new-daily-budget/new-daily-budget.component';
import { RouterLink } from '@angular/router';
import {
  Withdrawal,
  WithdrawalHistoryService,
} from '../../services/withdrawal-history.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    KeyboardComponent,
    WithdrawalAmountComponent,
    TodayBalanceComponent,
    PeriodBudgetStatisticsComponent,
    NewDailyBudgetComponent,
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  private withdrawalAmountService = inject(WithdrawalAmountService);
  private balancesService = inject(BalancesService);
  private withdrawalHistoryService = inject(WithdrawalHistoryService);
  private storageService = inject(StorageService);

  ngOnInit(): void {
    this.balancesService.load();
    const history =
      this.storageService.read<Withdrawal[]>('withdrawalHistory') ?? [];
    this.withdrawalHistoryService.setTransactions(history);
  }

  readonly withdrawalAmount = computed(() =>
    this.withdrawalAmountService.amountAsString(),
  );

  onKeyClick(key: string | number): void {
    if (typeof key === 'string') {
      if (key === '<') {
        this.handleSubtract();
      } else if (key === '=') {
        this.withdrawalHistoryService.push(
          this.withdrawalAmountService.amountAsNumber(),
        );
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
