import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBooksComponent } from './archive-books.component';

describe('ArchiveBooksComponent', () => {
  let component: ArchiveBooksComponent;
  let fixture: ComponentFixture<ArchiveBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveBooksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
