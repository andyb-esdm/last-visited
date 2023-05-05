import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartmentDetailsComponent } from './compartment-details.component';

describe('CompartmentDetailsComponent', () => {
  let component: CompartmentDetailsComponent;
  let fixture: ComponentFixture<CompartmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartmentDetailsComponent]
    });
    fixture = TestBed.createComponent(CompartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
