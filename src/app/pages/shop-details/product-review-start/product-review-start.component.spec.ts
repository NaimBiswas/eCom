import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewStartComponent } from './product-review-start.component';

describe('ProductReviewStartComponent', () => {
  let component: ProductReviewStartComponent;
  let fixture: ComponentFixture<ProductReviewStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
