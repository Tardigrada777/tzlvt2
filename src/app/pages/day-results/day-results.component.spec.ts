import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayResultsComponent } from './day-results.component';

describe('DayResultsComponent', () => {
  let component: DayResultsComponent;
  let fixture: ComponentFixture<DayResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
