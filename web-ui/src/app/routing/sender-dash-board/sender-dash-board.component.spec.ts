import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderDashBoardComponent } from './sender-dash-board.component';

describe('SenderDashBoardComponent', () => {
  let component: SenderDashBoardComponent;
  let fixture: ComponentFixture<SenderDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
