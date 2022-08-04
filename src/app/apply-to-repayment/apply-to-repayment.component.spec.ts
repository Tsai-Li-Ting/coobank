import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToRepaymentComponent } from './apply-to-repayment.component';

describe('ApplyToRepaymentComponent', () => {
  let component: ApplyToRepaymentComponent;
  let fixture: ComponentFixture<ApplyToRepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyToRepaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyToRepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
