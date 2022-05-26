import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBookCardComponent } from './archive-book-card.component';

describe('ArchiveBookCardComponent', () => {
  let component: ArchiveBookCardComponent;
  let fixture: ComponentFixture<ArchiveBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveBookCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
