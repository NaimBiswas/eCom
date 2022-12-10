import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAddsComponent } from './big-adds.component';

describe('BigAddsComponent', () => {
  let component: BigAddsComponent;
  let fixture: ComponentFixture<BigAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigAddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
