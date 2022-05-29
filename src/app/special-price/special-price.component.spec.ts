import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPriceComponent } from './special-price.component';

describe('SpecialPriceComponent', () => {
  let component: SpecialPriceComponent;
  let fixture: ComponentFixture<SpecialPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
