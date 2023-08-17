import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLinesQtyComponent } from './new-lines-qty.component';

describe('NewLinesQtyComponent', () => {
  let component: NewLinesQtyComponent;
  let fixture: ComponentFixture<NewLinesQtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLinesQtyComponent]
    });
    fixture = TestBed.createComponent(NewLinesQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
