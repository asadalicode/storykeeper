import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmailComponent } from './add-new-email.component';

describe('AddNewEmailComponent', () => {
  let component: AddNewEmailComponent;
  let fixture: ComponentFixture<AddNewEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewEmailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
