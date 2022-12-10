import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingProductsComponent } from './sliding-products.component';

describe('SlidingProductsComponent', () => {
  let component: SlidingProductsComponent;
  let fixture: ComponentFixture<SlidingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
