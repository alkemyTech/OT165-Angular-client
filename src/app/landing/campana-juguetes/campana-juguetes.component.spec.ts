import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaJuguetesComponent } from './campana-juguetes.component';

describe('CampanaJuguetesComponent', () => {
  let component: CampanaJuguetesComponent;
  let fixture: ComponentFixture<CampanaJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanaJuguetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
