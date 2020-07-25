import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPercentageBoxComponent } from './data-percentage-box.component';

describe('DataPercentageBoxComponent', () => {
  let component: DataPercentageBoxComponent;
  let fixture: ComponentFixture<DataPercentageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPercentageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPercentageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
