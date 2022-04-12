import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaEscolarComponent } from './campana-escolar.component';

describe('CampanaEscolarComponent', () => {
  let component: CampanaEscolarComponent;
  let fixture: ComponentFixture<CampanaEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanaEscolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
