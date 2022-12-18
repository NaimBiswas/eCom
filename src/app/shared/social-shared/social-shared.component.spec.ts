import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSharedComponent } from './social-shared.component';

describe('SocialSharedComponent', () => {
  let component: SocialSharedComponent;
  let fixture: ComponentFixture<SocialSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
