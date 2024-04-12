import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryImageCustomTextComponent } from './ngx-gallery-image-custom-text.component';

describe('NgxGalleryImageCustomTextComponent', () => {
  let component: NgxGalleryImageCustomTextComponent;
  let fixture: ComponentFixture<NgxGalleryImageCustomTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGalleryImageCustomTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGalleryImageCustomTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
