import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCurvedComponent } from './image-curved.component';

describe('ImageCurvedComponent', () => {
  let component: ImageCurvedComponent;
  let fixture: ComponentFixture<ImageCurvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCurvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCurvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
