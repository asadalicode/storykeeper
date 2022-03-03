import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNewBookComponent } from './buy-new-book.component';

describe('BuyNewBookComponent', () => {
  let component: BuyNewBookComponent;
  let fixture: ComponentFixture<BuyNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyNewBookComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
