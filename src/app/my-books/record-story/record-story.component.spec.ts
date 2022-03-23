import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordStoryComponent } from './record-story.component';

describe('RecordStoryComponent', () => {
  let component: RecordStoryComponent;
  let fixture: ComponentFixture<RecordStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordStoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
