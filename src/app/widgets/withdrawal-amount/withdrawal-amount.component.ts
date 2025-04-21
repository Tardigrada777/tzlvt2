import { Component, input } from '@angular/core';

@Component({
  selector: 'app-withdrawal-amount',
  imports: [],
  templateUrl: './withdrawal-amount.component.html',
  styleUrl: './withdrawal-amount.component.css',
})
export class WithdrawalAmountComponent {
  amount = input<string>('0');
}
