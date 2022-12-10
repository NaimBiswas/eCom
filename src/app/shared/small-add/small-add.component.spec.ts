import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAddComponent } from './small-add.component';

describe('SmallAddComponent', () => {
  let component: SmallAddComponent;
  let fixture: ComponentFixture<SmallAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
