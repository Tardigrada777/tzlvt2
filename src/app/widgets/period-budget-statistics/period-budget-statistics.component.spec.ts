import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodBudgetStatisticsComponent } from './period-budget-statistics.component';

describe('PeriodBudgetStatisticsComponent', () => {
  let component: PeriodBudgetStatisticsComponent;
  let fixture: ComponentFixture<PeriodBudgetStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodBudgetStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodBudgetStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
