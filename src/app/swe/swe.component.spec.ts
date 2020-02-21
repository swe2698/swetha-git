import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweComponent } from './swe.component';

describe('SweComponent', () => {
  let component: SweComponent;
  let fixture: ComponentFixture<SweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
