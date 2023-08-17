import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSelectionComponent } from './phone-selection.component';

describe('PhoneSelectionComponent', () => {
  let component: PhoneSelectionComponent;
  let fixture: ComponentFixture<PhoneSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneSelectionComponent]
    });
    fixture = TestBed.createComponent(PhoneSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
