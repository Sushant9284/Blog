import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreationComponent } from './blog-creation.component';

describe('BlogCreationComponent', () => {
  let component: BlogCreationComponent;
  let fixture: ComponentFixture<BlogCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
