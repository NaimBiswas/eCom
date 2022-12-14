import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridSliderComponent } from './product-grid-slider.component';

describe('ProductGridSliderComponent', () => {
  let component: ProductGridSliderComponent;
  let fixture: ComponentFixture<ProductGridSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
