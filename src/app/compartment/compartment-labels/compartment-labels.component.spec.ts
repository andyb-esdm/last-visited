import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartmentLabelsComponent } from './compartment-labels.component';

describe('CompartmentLabelsComponent', () => {
  let component: CompartmentLabelsComponent;
  let fixture: ComponentFixture<CompartmentLabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartmentLabelsComponent]
    });
    fixture = TestBed.createComponent(CompartmentLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
