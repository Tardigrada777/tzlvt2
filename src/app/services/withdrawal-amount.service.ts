import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WithdrawalAmountService {
  /**
   * The withdrawal amount as a string.
   */
  private readonly amount = signal<string>('0');

  /**
   * The withdrawal amount as a number.
   */
  readonly amountAsNumber = computed<number>(() => parseFloat(this.amount()));

  /**
   * The withdrawal amount as a formatted string.
   */
  readonly amountAsString = computed<string>(() => {
    const value = this.amountAsNumber();
    return isNaN(value) ? '0' : value.toString();
  });

  /**
   * Adds a character to the withdrawal amount.
   * Makes sure that the number in the string is a valid number.
   * @param char - The character to be added to the amount.
   */
  push(char: string): number {
    const prevAmount = this.amountAsNumber();
    const nextChar = char === ',' ? '.' : char;
    this.amount.update((prev) => prev + nextChar);
    return prevAmount - this.amountAsNumber();
  }

  /**
   * Removes the last character from the withdrawal amount.
   * @returns The updated amount after removing the last character.
   */
  pop(): number {
    const prevAmount = this.amountAsNumber();
    if (this.amountAsNumber() > 0) {
      this.amount.update((prev) => prev.slice(0, -1));
      return prevAmount - this.amountAsNumber();
    }
    return 0;
  }

  /**
   * Resets the withdrawal amount to zero.
   */
  reset(): void {
    this.amount.set('0');
  }
}
