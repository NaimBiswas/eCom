import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostGridComponent } from './blog-post-grid.component';

describe('BlogPostGridComponent', () => {
  let component: BlogPostGridComponent;
  let fixture: ComponentFixture<BlogPostGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
