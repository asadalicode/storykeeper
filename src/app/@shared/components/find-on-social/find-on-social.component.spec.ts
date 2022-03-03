import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOnSocialComponent } from './find-on-social.component';

describe('FindOnSocialComponent', () => {
  let component: FindOnSocialComponent;
  let fixture: ComponentFixture<FindOnSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindOnSocialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOnSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
