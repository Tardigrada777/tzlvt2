import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDailyBudgetComponent } from './new-daily-budget.component';

describe('NewDailyBudgetComponent', () => {
  let component: NewDailyBudgetComponent;
  let fixture: ComponentFixture<NewDailyBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDailyBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDailyBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
