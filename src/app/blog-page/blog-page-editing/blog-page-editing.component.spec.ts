import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageEditingComponent } from './blog-page-editing.component';

describe('BlogPageEditingComponent', () => {
  let component: BlogPageEditingComponent;
  let fixture: ComponentFixture<BlogPageEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
