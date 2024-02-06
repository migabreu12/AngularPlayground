import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenValueComponent } from './even-value.component';

describe('EvenValueComponent', () => {
  let component: EvenValueComponent;
  let fixture: ComponentFixture<EvenValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
