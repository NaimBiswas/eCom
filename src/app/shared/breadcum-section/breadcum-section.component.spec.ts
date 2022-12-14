import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumSectionComponent } from './breadcum-section.component';

describe('BreadcumSectionComponent', () => {
  let component: BreadcumSectionComponent;
  let fixture: ComponentFixture<BreadcumSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcumSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
