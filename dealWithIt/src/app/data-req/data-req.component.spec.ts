import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReqComponent } from './data-req.component';

describe('DataReqComponent', () => {
  let component: DataReqComponent;
  let fixture: ComponentFixture<DataReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataReqComponent]
    });
    fixture = TestBed.createComponent(DataReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
