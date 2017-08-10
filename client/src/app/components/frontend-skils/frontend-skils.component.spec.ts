import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSkilsComponent } from './frontend-skils.component';

describe('FrontendSkilsComponent', () => {
  let component: FrontendSkilsComponent;
  let fixture: ComponentFixture<FrontendSkilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendSkilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendSkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
