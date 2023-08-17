import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlineTransTypeComponent } from './newline-trans-type.component';

describe('NewlineTransTypeComponent', () => {
  let component: NewlineTransTypeComponent;
  let fixture: ComponentFixture<NewlineTransTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewlineTransTypeComponent]
    });
    fixture = TestBed.createComponent(NewlineTransTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
