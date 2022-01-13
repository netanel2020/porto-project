import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdactComponent } from './post-prodact.component';

describe('PostProdactComponent', () => {
  let component: PostProdactComponent;
  let fixture: ComponentFixture<PostProdactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProdactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProdactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
