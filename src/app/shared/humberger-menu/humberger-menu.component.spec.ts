import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbergerMenuComponent } from './humberger-menu.component';

describe('HumbergerMenuComponent', () => {
  let component: HumbergerMenuComponent;
  let fixture: ComponentFixture<HumbergerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumbergerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumbergerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
