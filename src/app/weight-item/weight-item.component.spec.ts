import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightItemComponent } from './weight-item.component';

describe('WeightItemComponent', () => {
  let component: WeightItemComponent;
  let fixture: ComponentFixture<WeightItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
