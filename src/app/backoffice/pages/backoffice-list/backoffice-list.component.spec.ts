import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeListComponent } from './backoffice-list.component';

describe('BackofficeListComponent', () => {
  let component: BackofficeListComponent;
  let fixture: ComponentFixture<BackofficeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
