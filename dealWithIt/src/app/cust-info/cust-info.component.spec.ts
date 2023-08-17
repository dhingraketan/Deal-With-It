import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustInfoComponent } from './cust-info.component';

describe('CustInfoComponent', () => {
  let component: CustInfoComponent;
  let fixture: ComponentFixture<CustInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustInfoComponent]
    });
    fixture = TestBed.createComponent(CustInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
