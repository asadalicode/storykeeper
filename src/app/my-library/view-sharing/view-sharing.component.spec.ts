import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSharingComponent } from './view-sharing.component';

describe('ViewSharingComponent', () => {
  let component: ViewSharingComponent;
  let fixture: ComponentFixture<ViewSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSharingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
