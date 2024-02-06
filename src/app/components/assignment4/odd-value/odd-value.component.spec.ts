import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddValueComponent } from './odd-value.component';

describe('OddValueComponent', () => {
  let component: OddValueComponent;
  let fixture: ComponentFixture<OddValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
