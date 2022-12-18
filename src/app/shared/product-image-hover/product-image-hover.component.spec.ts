import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageHoverComponent } from './product-image-hover.component';

describe('ProductImageHoverComponent', () => {
  let component: ProductImageHoverComponent;
  let fixture: ComponentFixture<ProductImageHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImageHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
