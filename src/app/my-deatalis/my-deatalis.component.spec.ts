import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeatalisComponent } from './my-deatalis.component';

describe('MyDeatalisComponent', () => {
  let component: MyDeatalisComponent;
  let fixture: ComponentFixture<MyDeatalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDeatalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDeatalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
