import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-day-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './day-results.component.html',
  styleUrl: './day-results.component.css',
})
export class DayResultsComponent {}
