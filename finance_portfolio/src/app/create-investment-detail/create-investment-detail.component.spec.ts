import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvestmentDetailComponent } from './create-investment-detail.component';

describe('CreateInvestmentDetailComponent', () => {
  let component: CreateInvestmentDetailComponent;
  let fixture: ComponentFixture<CreateInvestmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInvestmentDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInvestmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
