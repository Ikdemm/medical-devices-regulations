import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedHomeComponent } from './med-home.component';

describe('MedHomeComponent', () => {
  let component: MedHomeComponent;
  let fixture: ComponentFixture<MedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
