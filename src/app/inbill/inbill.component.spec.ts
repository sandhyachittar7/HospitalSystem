import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbillComponent } from './inbill.component';

describe('InbillComponent', () => {
  let component: InbillComponent;
  let fixture: ComponentFixture<InbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
