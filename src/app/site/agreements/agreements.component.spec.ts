import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAgreementsComponent } from './agreements.component';

describe('AgreementsComponent', () => {
  let component: SiteAgreementsComponent;
  let fixture: ComponentFixture<SiteAgreementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteAgreementsComponent],
    });
    fixture = TestBed.createComponent(SiteAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
