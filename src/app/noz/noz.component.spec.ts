import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozComponent } from './noz.component';

describe('NozComponent', () => {
  let component: NozComponent;
  let fixture: ComponentFixture<NozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
