import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartmentComponent } from './compartment.component';

describe('CompartmentComponent', () => {
  let component: CompartmentComponent;
  let fixture: ComponentFixture<CompartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartmentComponent]
    });
    fixture = TestBed.createComponent(CompartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
