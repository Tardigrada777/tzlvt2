import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBalanceComponent } from './today-balance.component';

describe('TodayBalanceComponent', () => {
  let component: TodayBalanceComponent;
  let fixture: ComponentFixture<TodayBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
