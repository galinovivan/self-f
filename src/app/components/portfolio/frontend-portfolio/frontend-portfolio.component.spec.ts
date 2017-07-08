import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPortfolioComponent } from './frontend-portfolio.component';

describe('FrontendPortfolioComponent', () => {
  let component: FrontendPortfolioComponent;
  let fixture: ComponentFixture<FrontendPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
