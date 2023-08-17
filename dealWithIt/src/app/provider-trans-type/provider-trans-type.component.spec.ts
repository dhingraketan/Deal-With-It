import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTransTypeComponent } from './provider-trans-type.component';

describe('ProviderTransTypeComponent', () => {
  let component: ProviderTransTypeComponent;
  let fixture: ComponentFixture<ProviderTransTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderTransTypeComponent]
    });
    fixture = TestBed.createComponent(ProviderTransTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
