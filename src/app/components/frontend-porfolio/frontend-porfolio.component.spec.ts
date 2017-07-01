import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPorfolioComponent } from './frontend-porfolio.component';

describe('FrontendPorfolioComponent', () => {
  let component: FrontendPorfolioComponent;
  let fixture: ComponentFixture<FrontendPorfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPorfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
