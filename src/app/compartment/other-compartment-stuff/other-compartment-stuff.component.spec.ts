import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCompartmentStuffComponent } from './other-compartment-stuff.component';

describe('OtherCompartmentStuffComponent', () => {
  let component: OtherCompartmentStuffComponent;
  let fixture: ComponentFixture<OtherCompartmentStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherCompartmentStuffComponent]
    });
    fixture = TestBed.createComponent(OtherCompartmentStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
