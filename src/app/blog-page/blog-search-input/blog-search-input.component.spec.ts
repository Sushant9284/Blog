import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchInputComponent } from './blog-search-input.component';

describe('BlogSearchInputComponent', () => {
  let component: BlogSearchInputComponent;
  let fixture: ComponentFixture<BlogSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
