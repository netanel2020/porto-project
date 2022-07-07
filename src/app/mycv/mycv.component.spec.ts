import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycvComponent } from './mycv.component';

describe('MycvComponent', () => {
  let component: MycvComponent;
  let fixture: ComponentFixture<MycvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
